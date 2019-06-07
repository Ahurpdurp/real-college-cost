# RealCollegeCost
App that calculates the total cost of college, not just tuition ([Real College Cost](https://real-college-cost.com)).

As someone who's tutored the SAT/ACT on the side for years now, I've always been invested in the lives of high school students.
When students are thinking about which college to attend, it can be easy to only take the cost of tuition into consideration. 
That's where RealCollegeCost comes in. Using this website, students can estimate the cost of their entire college experience, including
rent, food, textbooks, equipment, monthly subscriptions, even their spotify/netflix fees. Pulling data from college and cost of 
living apis, this website will do a lot of the estimating automatically, but students are always free to enter in their own custom 
amounts. This app is built using primarily react, redux, and node for the backend. Users can also login using Facebook (Google coming soon!) in order to save their results. 

Here's a flow of the website:

Home Page: 

![alt text](https://raw.githubusercontent.com/Ahurpdurp/real-college-cost/master/Client/src/images/Final1.png)

Search for your college (this uses a college api of over 7,200 colleges). 

![alt text](https://raw.githubusercontent.com/Ahurpdurp/real-college-cost/master/Client/src/images/search.png)

The next step is to calculate the tuition based off of the parents' income (since this determines financial aid). 
An estimate is given based off the most recent data, which the student is also welcome to change. 

![alt text](https://raw.githubusercontent.com/Ahurpdurp/real-college-cost/master/Client/src/images/Final2.png)

If the user select a public college, he or she must specify if it's out of state or in state:

![alt text](https://raw.githubusercontent.com/Ahurpdurp/real-college-cost/master/Client/src/images/Final3.png)

The next step is to calculate housing costs. An estimated number is already given for on campus housing (which includes food,
utility bills, etc.). If the student is planning on living off campus, he or she can enter a custom estimate. In the future, I will be implementing a rent api that can also give an estimate for apartments in the city. 

![alt text](https://raw.githubusercontent.com/Ahurpdurp/real-college-cost/master/Client/src/images/Final4.png)

Next, we're going to think about big costs only happen at most once a year:

![alt text](https://raw.githubusercontent.com/Ahurpdurp/real-college-cost/master/Client/src/images/Final5.png)

Next, we're going to calculate monthly bills, such as phone bills, food, stuff like that.

![alt text](https://raw.githubusercontent.com/Ahurpdurp/real-college-cost/master/Client/src/images/Final6.png)

Next, we're going to think about subscriptions that studnets usually use.

![alt text](https://raw.githubusercontent.com/Ahurpdurp/real-college-cost/master/Client/src/images/Final7.png)

And finally, recreational costs.

![alt text](https://raw.githubusercontent.com/Ahurpdurp/real-college-cost/master/Client/src/images/Final8.png).

So here's the first part of the total page. The pie chart displays the total cost based on six categories.

![alt text](https://raw.githubusercontent.com/Ahurpdurp/real-college-cost/master/Client/src/images/Final9.png).

As you scroll down, you can see the six categories along with the estimated four year costs based on inflation.

![alt text](https://raw.githubusercontent.com/Ahurpdurp/real-college-cost/master/Client/src/images/Final10.png).

Feel free to log in anytime in the calculation process to save your results. 

![alt text](https://raw.githubusercontent.com/Ahurpdurp/real-college-cost/master/Client/src/images/Final11.png).

If a user is logged in, he or she can view their saved results as well:

![alt text](https://raw.githubusercontent.com/Ahurpdurp/real-college-cost/master/Client/src/images/Final12.png).

And that's pretty much it! There's a couple of other FAQ pages, but this outlines the main flow of the website. Feel free to give me any feedback on the website :). 





