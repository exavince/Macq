package controllers

import javax.inject._
import play.api.mvc._
import repositories.UserRepository
import reactivemongo.bson.BSONObjectID
import play.api.libs.json.{Json, __}
import scala.util.{Failure, Success}
import scala.concurrent.{ExecutionContext, Future}

import models.User
import play.api.libs.json.JsValue

@Singleton
class UserController @Inject()(implicit executionContext: ExecutionContext, val userRepository: UserRepository, val controllerComponents: ControllerComponents) extends BaseController {
  
  def findAll():Action[AnyContent] = Action.async { implicit request: Request[AnyContent] =>
    userRepository.findAll().map {
      users => Ok(Json.toJson(users))
    }
  }

  def findOne(id:String):Action[AnyContent] = Action.async { implicit request: Request[AnyContent] =>
    val objectIdTryResult = BSONObjectID.parse(id)
    objectIdTryResult match {
      case Success(objectId) => userRepository.findOne(objectId).map {
        user => Ok(Json.toJson(user))
      }
      case Failure(_) => Future.successful(BadRequest("Cannot parse the movie id"))
    }
  }

  def create():Action[JsValue] = Action.async(controllerComponents.parsers.json) { implicit request => {
    request.body.validate[User].fold(
      _ => Future.successful(BadRequest("Cannot parse request body")),
      user =>
        userRepository.create(user).map {
          _ => Created(Json.toJson(user))
        }
    )
  }}

  def update(id: String):Action[JsValue]  = Action.async(controllerComponents.parsers.json) { implicit request => {
    request.body.validate[User].fold(
      _ => Future.successful(BadRequest("Cannot parse request body")),
      user =>{
        val objectIdTryResult = BSONObjectID.parse(id)
        objectIdTryResult match {
          case Success(objectId) => userRepository.update(objectId, user).map {
            result => Ok(Json.toJson(result.ok))
          }
          case Failure(_) => Future.successful(BadRequest("Cannot parse the movie id"))
        }
      }
    )
  }}

  def delete(id: String):Action[AnyContent]  = Action.async { implicit request => {
    val objectIdTryResult = BSONObjectID.parse(id)
    objectIdTryResult match {
      case Success(objectId) => userRepository.delete(objectId).map {
        _ => NoContent
      }
      case Failure(_) => Future.successful(BadRequest("Cannot parse the movie id"))
    }
  }}
}