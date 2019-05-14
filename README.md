# RealCollegeCost
App that calculates the total cost of college, not just tuition (currently work in progress!).

As someone who's tutored the SAT/ACT on the side for years now, I've always been invested in the lives of high school students.
When students are thinking about which college to attend, it can be easy to only take the cost of tuition into consideration. 
That's where RealCollegeCost comes in. Using this website, students can estimate the cost of their entire college experience, including
rent, food, textbooks, equipment, monthly subscriptions, even their spotify/netflix fees. Pulling data from college and cost of 
living apis, this website will do a lot of the estimating automatically, but students are always free to enter in their own custom 
amounts. This app is built using primarily react, redux, and node for the backend. Eventually users will be able to login and save their preferences so they don't have to enter in the same data for every college they search up. 

Here's a flow of the website so far. I expect to finish the website late May.

Home Page: 

![alt text](https://raw.githubusercontent.com/Ahurpdurp/real-college-cost/master/Client/src/images/Page1.png)

Search for your college (this uses a college api of over 7,200 colleges). 

![alt text](https://raw.githubusercontent.com/Ahurpdurp/real-college-cost/master/Client/src/images/tuition.png)

The next step is to calculate the tuition based off of the parents' income (since this determines financial aid). 
An estimate is given based off the most recent data, which the student is also welcome to change. 

![alt text](https://raw.githubusercontent.com/Ahurpdurp/real-college-cost/master/Client/src/images/housing.png)

The next step is to calculate housing costs. An estimated number is already given for on campus housing (which includes food,
utility bills, etc.). If the student is planning on living off campus, he or she can enter a custom estimate. In the future, I will be implementing a rent api that can also give an estimate for apartments in the city. 

![alt text](https://raw.githubusercontent.com/Ahurpdurp/real-college-cost/master/Client/src/images/Page4.png)

Next, we're going to calculate monthly bills, such as phone bills, food, stuff like that.

![alt text](https://raw.githubusercontent.com/Ahurpdurp/real-college-cost/master/Client/src/images/Page5.png)

And that's currently what's been developed! The project is expected to be done by the end of May. I promise the final product will be much cleaner :). Feel free to ask me any questions or offer any criticism. Thanks for reading! 
