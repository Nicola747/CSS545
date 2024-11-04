# HW3: State Management

## What are the various states that an app can enter on your platform of choice
We are developing cross-platform using react-native and are mostly focusing on running on android as of right now. In general, the following states will be tru or both iOS and Android platforms: 
- Active/Inactive
    - While the app is actively being interacted with/App is seen but not interacted with
- Background
    - App running background processes but is not visible (e.g. timer is running in the background)
- Suspended
    - Background like state but any processes have been temporarily suspended
- Killed
    - Completely closed app (i.e. not background)
    - Closed by User or OS

## What are the various states that you must consider for your app, why you must consider it, and what must happen in each state.

I think for our application we want to consider all of the above states and what we should do in each of them.

In ***Active*** we display timer and timer controls, we need to consider it because this is the main functionality of our app. In this state the user must be able to control the timer/settings and interact with any of the other app features. 

<br>

We need to consider ***Inactive*** because it is very likely that the app will find itself in this state when the user switches away from our app. What needs to happen is that state should be saved and that the timer should continue counting down without errors. Then, when the app becomes active again, everything should be resumed with the updated progress of the timer. 

<br>

We need to consider ***Background*** because our app will spend most of its time being used in this state. As a timer/alarm app, it will most likely spend the most time in this state so it is most important to ensure that there are no errors that occur in this state or on resume/save of this state. What needs to happen in this state is that the app needs to save its state and ensure that a background process can continue that will monitor the status of the timer or an alarm. Most importantly we need to ensure that while the process is in the background, the alarms will still be able to ring when completed. This will likely be a fairly large challenge. 

<br>

We will need to consider ***Suspended*** state because it is important that if system resources are at their capacity and our app gets suspended because of it, the timer needs to keep working. What needs to happen is saving the state before being suspended and then continuing the timer through a background process. This will likely present a challenge to us. 

<br>

Finally, we need to consider what happens when the app is ***Killed***. We need to consider what we want the behavior to be when the app gets closed completely because obviously in this state nothing will be running in the background. What we could have happen is that we regularly save the state and then if the app is killed, on resume we calculate if the time elapsed has passed or if it is still ongoing we could resume the progress of the timer. Alternatively if there is a way to continue through a background process that would be ideal. However, that may be too much for the scope of this class. 
