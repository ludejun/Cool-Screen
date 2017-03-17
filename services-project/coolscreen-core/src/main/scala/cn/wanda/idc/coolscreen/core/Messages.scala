package cn.wanda.idc.coolscreen.core

/**
 * @author henry
 */
sealed trait Message

case class OnlineProcessingComplete() extends Message
case class OfflineProcessingComplete(taskId: String) extends Message
case class DataProcessingComplete(taskId: String) extends Message

//sealed trait ResultMessage
//case class Success(message: String) extends ResultMessage
//case class RecommendProductsJson(json: String) extends ResultMessage
//case class EventsJson(json: String) extends ResultMessage
//case class Error(message: String)
//
//sealed trait RequestMessage
//
////recommend engine
//case class TrainALSModel() extends RequestMessage
//case class GetRecommendedItemsOnLogin(userId: String) extends RequestMessage
//case class GetRecommendedItemsOnView(userId: String) extends RequestMessage
//case class GetRecommendedItemsByCFModel(userId: String) extends RequestMessage
//case class GetRecommendedItemsByPSUModel(userId: String) extends RequestMessage
//case class GetRecommendedItemsByActionX(val action: String, val userId: String) extends RequestMessage
//case class GetRecommendedItemsByMethodX(val method: String, val userId: String) extends RequestMessage
//case class UpdateUser(user: String) extends RequestMessage
//case class DeleteRating(user: Int, productId: Int) extends RequestMessage
//case class DeleteProduct(product: String) extends RequestMessage
//case class DeleteUser(user: String) extends RequestMessage
//case class GetRatingBufferMap() extends RequestMessage
//case class GetHotProducts() extends RequestMessage
//case class MergerRatingBuffer() extends RequestMessage
//case class LoadData() extends RequestMessage
//case class PrintRatingTable() extends RequestMessage
//case class PrintProductTable() extends RequestMessage
//case class CalcSimilarProductMatrix() extends RequestMessage
//case class CalcHotProductList() extends RequestMessage
//case class PrintInfo(value: String) extends RequestMessage
//case class UpdateRecommendFromCFModel() extends RequestMessage
//
//case class StorageEvent(eventsJson: String) extends RequestMessage
//case class getRecentlyEvents(userId: String, eventType: String) extends RequestMessage
////algortithm engine
//case class Start() extends RequestMessage
//case class Scheduler(initialDelay:Long,interval:Long) extends RequestMessage

