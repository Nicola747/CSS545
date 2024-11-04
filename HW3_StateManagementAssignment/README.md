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

