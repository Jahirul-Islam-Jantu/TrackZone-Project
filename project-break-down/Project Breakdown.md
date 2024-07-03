# Project Breakdown for track zone

## Requirements for the project:
-   User can set their own time and TimeZone . This clock can’t be deleted only can edit.
-   User can create as many clock as they want.
    - Each clock has their own title or name.
    - Own Time zone.
    - Simple events with time.
    - Time difference between users time zone and clocks time zone in hour and minute.
-   User can edit or delete a clock
-   Time zone could be UTC(standard) , GMT, PST, EST
-   Only date-fns library allowed to use in this project, rest of the logic should write by yourself
-   Every data must be validated

### What to submit?

- A proper breakdown of the requirements
- component tree and dataflow
- proper use of components and custom hooks


# Requirements Breakdown for this project
 * We will have a local clock and a list of clocks.
 * We will create the initial clock from the user's timezone.
 * Clock object will look like: 
   * Id
   * Title
   * Timezone
     * type(UTC, GMT, EST, PST)
     * offset
   * events

 * Event object will look like: 
   * id
   * clock id
   * text
   * timeZone
   * StartTime
   * EndTime
   * status
 
We will use a clock object for local clock, 
we will use an array of clocks for other clocks.
we will use event id to create event inside clock.

* Clock features
  * properties
  * update clock
  * delete clock
  * calculate difference
  * update events
* Events features
  * event properties
  * create event 
  * delete event 
  * update event 
  * filter events by clock
  * get event by id
  * get events by ids
  




# Breakdown questions for client
-  Very fast time we have to read full requirements given from the client for the project
-  first question for me that here client serve me about user, not for users. if only a single user use this project, then its ok. but if     many users use this then if i should create login, registration form for the users?
    - client said this app will use without any login , registration form.
-  second question from this requirements is, where to store app data?
    - this app will be a serverless app, i can use local storage for data store.
-  3rd question, should i set custom time for my default or time zone for this app?
    - user will only set their default time by click time zone. i don’t have to create a customize time format for the default clock.
-  4th question is if user entered into this app what should i show to user? should i show him a custom popup to create a base clock for him or should i show him a clock by default where user can modify his time zone?
    - client have no choice for this option, client gave me the permission to do as i want.
-  5th question is custom default clock can only be edited, others all clock’s edit, delete and event feature are same. should i have to make some different UI for default clock or the other’s clock?
    - It depends on personal choice.
-  client didn’t clear that if i have to add any event on default clock.
    - event can be added