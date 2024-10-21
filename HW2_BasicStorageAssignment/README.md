# HW2 - Basic Storage Answers to Questions

## Various approaches to storage management on your platform of choice
For the project our platform will be using is both Android and iOS as we hope to be able to develope our application
crossplatform using react native. Therefore, there are some specific considerations that need to be taken into account
because of differences in platforms. <br><br>
The options we have available to us when using react native are the following:
- react-native-fs (file system)
- AsyncStorage (key-value)
- Realm (database)
- SQLite (database)
         

## Pros AND cons of each approach for our project
For our project, **AsyncStorage** could be useful for storing user settings as it is easy to use and data stored here persists after app restart. This option is also known to be consistent in behavior between the Android and iOS platform so since we intend to develop crossplatform this is a pro for us. A negative however, is that this storage type is not  meant to handle larger quantities of data and therefore is not useful for anything more than storing settings. It also does not support structured retrieval such as a database would.  

We could end up experimenting with using **react-native-fs** for our project as it has the pro of allowing us to store a variety of file types and requiring no knowledge of how database queries work. However, a negative of this approach is that you have to devise a way manually to store, organize, and parse your saved data. This would likely increase the complexity of our code which we may or may not want to avoid depending on how well the other data storage solutions work for us. 

Next we have **Realm** and **SQLite**. Both of these are database storage solutions. However there are some key differences in their benefits and drawbacks. **SQLite** has the benefit of having support for ensuring the consistency of data stored within. They way SQL databases work would allow us to use it to potentially make a structure that holds either media for alarm sounds or lists of saved alarms/timers by the users. However, using SQLite comes with the drawback that we must all be familiar with using SQL queries an also requiring a bit more initial setup. **Realm** solves some of these problems as its main benefit is that it uses a object oriented model for how it stores data. However a big drawback to Realm is that it is not very crossplatform friendly. Because of that none of the other benefits that it offers really matter. 