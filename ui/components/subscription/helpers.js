import subscribeOperatorStatusEvents from "../graphql/subscriptions/OperatorStatusSubscription";
import { isOperatorStateSubscriptionDataUpdated } from "./comparatorFns";
import {  mergeOperatorStateSubscription } from "./mergeFns";

export const MESHSYNC_EVENT_SUBSCRIPTION = "MESHSYNC_EVENT_SUBSCRIPTION";
export const OPERATOR_EVENT_SUBSCRIPTION = "OPERATOR_EVENT_SUBSCRIPTION";

export const fnMapping = {
  // MESHSYNC_EVENT_SUBSCRIPTION : {
  //   eventName : "listenToMeshSyncEvents",
  //   comparatorFn : isMeshSyncSubscriptionDataUpdated,
  //   subscriptionFn : subscribeMeshSyncStatusEvents,
  //   mergeFn : mergeMeshSyncSubscription
  // },
  OPERATOR_EVENT_SUBSCRIPTION : {
    eventName : "operator",
    comparatorFn : isOperatorStateSubscriptionDataUpdated,
    subscriptionFn : subscribeOperatorStatusEvents,
    mergeFn : mergeOperatorStateSubscription
  }
}