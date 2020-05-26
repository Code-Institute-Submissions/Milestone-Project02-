# Milestone-Project02

https://philw1981.github.io/Milestone-Project02-/

### Strategy

The Key demographic for this project are couples spanning from newly-weds up to retired couples. They will be going for a very special occasion such as honeymoon or wedding anniversary or for a spectacular holiday.

#### User Stories

I Identified the following relating to the strategy I explained.

I know exactly where I want to go on holiday (Bora Bora)
I want to find out what choices I have and what their is to see and do.
I want a five star experience.
I don't know where I want to go on holiday but I want to know what this destination has to offer.
Where can I go to eat or drink on my stay, what's the address / does it have a website / what's their phone number.
I want to plan on what to do and what to visit before I go.
I want to know the weather for the time of year I am going.

### Scope

Having identified the type of users, I used this in the planning including layout, what features would be needed to help the user and kind of palette to attract the user to explore the website.

#### Functional & Content Requirements

1. The website must (peacock) show off the beauty of the destination with.
2. The website must have an eye-catching front page to grab the user.
3. The website must used a range of components/layout to help show off all that the destination has to offer using gallery, sliders and media such as video.
4. The website should feel light and bright to represent the destination and bring that holiday feel.
5. The website should have a palette that appeals to a wide range of ages mas outlined in the strategy.

### Structure

The below is based on the user I identified, right from the stat I felt this had to be a very gallery/video oriented layout in order to really sell to potential/returning customers.

**Homepage** - This had to be eye catching whilst setting the tone for the whole project- To do this you are met with a scrolling video carousel that has links to more videos to really draw the user in.

**About** - This helps tell the user who Bora Bora VIP are and what they have to offer- This is meant to give the user confidence that this company will take care of you and its money well spent. It has weather???? and a gallery again to showcase the beauty & luxury of the destination.

**Experiences & Activities** - This page goes into detail about what you can do and has a wide ranging selection to cater to all the users mentioned.

**Contact** - After the user has experienced the website if they still have any questions this page is here to encourage contact and help develop a relationship with potential customers.

### Skeleton

I have included the wireframes for my site in the wireframes folder in this repository.

[**Desktop Home**](https://github.com/philw1981/Milestone-Project02-/blob/master/wireframes/Homepage%20Bora%20Bora.png)

[**Desktop Packages & things to do/Now Experiences**](https://github.com/philw1981/Milestone-Project02-/blob/master/wireframes/Packages%20%26%20things%20to%20do.png)

[**Desktop About**](https://github.com/philw1981/Milestone-Project02-/blob/master/wireframes/about.png)

[**Desktop Contact**](https://github.com/philw1981/Milestone-Project02-/blob/master/wireframes/contact.png)

[**Tablet Wireframes**](?)

[**Mobile Wireframes**](?)

### Surface

The palette used was very light and bright I feel this helps the content (gallery/videos stand out to the user, I wanted to avoid strong bold colours.

#### Features

### General Features

1. Navbar – Fixed to the top for easy navigation that also scrolls with the user so they can instantly move around the website.
   2.Logo in left corner and always in view to reinforce to the customer.
2. Navbar pages: Home, About, Experiences & Activities & Contact.
3. Footer with the Name and copyright information displayed ????.

### Homepage Features

1.- Video carousel containing three videos auto scrolling.
2.- Each video has a modal which contains another video to show off all the sights and sell the location tom potential customers.

### About Features

1.- Open weather....
2.- Chartjs, hard coded line chart to show the average highest temperature each month of the year to help inform customers.
3.- Photo Gallery using lightbox to aid the user in scrolling through the photos and even navigation back to the current page.
4.- Testimonials using slick slider with easy to use navigation arrows to reinforce the quality of the company.

### Experiences & Activities Features

1.- Multiple google maps windows navigating the user to the different locations within each defined section which would help the user get an idea of ideal destinations within Bora Bora.

### Contact Features

1.- Another google map window giving an overview of Bora Bora.
2.- A contact us form connected with emailjs to encourage users to get in touch so the company can start a dialogue with potential customers.

### Future Features

1.- The videos on the homepage are big files and can slow the performance of the site down, espeially on mobile, these could be replaced when viewed in mobile or maybe compressed to help reduce any lag.
2.- Openweather app could be integrated further using more of the data and connecting with chartjs to provide real time data that the user would find useful when choosing to travel.
3.- In experiences & activities section instead of one static photo a carousel would fit well to showcase the sections visually.
4.- A booking system/availability calendar would be a nice feature to integrate.

## Testing

I have done lots of testing using the developer tools in Google Chrome.This helped especially when trying to troubleshoot java script issues. Below are issues that came up and needed troubleshooting

1.-Mulitple openweather issues not displaying in about page.
2.-Multiple google maps issues resolved by doing two functions function drawMapContact & function drawMapsExperiences.
3.- Google maps not showing on deployed site was resolved by adding an "s" to http.
4.-Emailjs issue of http error 405 after form sent.

Testing was done at every stage, making sure all links work and that the website was always responsive. This site was tested across multiple browsers (Chrome,Internet Explorer & FireFox ) it has also been tested on multiple mobile devices (iPhone 4, 5, 7: Chrome, iPad & Samsung Galaxy) to ensure of responsiveness.

At different times I did troubleshooting with my mentor and student support on my java script

Emailjs- This form has an error message if the user fails to fill out the form correctly.
I ran the site through GTmertix to get a guide to how the site performed.
Finally had friends & family test the website for me to feedback any issues or comments regarding the userability and layout

### Automated Testing

1.Validation Services
_ [W3C Markup Validator](https://validator.w3.org/) was used to validate my HTML code.
_ [W3C CSS Validator](https://jigsaw.w3.org/css-validator/) was used to validate my CSS code. \* [JS Fiddle](https://jsfiddle.net/api/post/library/pure/) was used for multiple parts of my JS such as googlemaps & contact forms.

## Deployment

This website is hosted and deployed on GitHub Pages.
The website can be viewed [Here](https://philw1981.github.io/Milestone-Project02-/)

##### How to deploy website on Github Pages.

I created my project using Visual Code Studio. My file structure was then created within Milestone-Project02-

- Click on name of repository that you want to deployed.

- On the top bar click on "Settings".

- Scroll down to GitHub Pages and from source drop down list choose "Master branch".

- Create the name for your deployed website and click on "Save" button.

## Technologies

- [Visual Studio Code](https://code.visualstudio.com/)
- [HTML5](https://en.wikipedia.org/wiki/HTML)
- [CSS](https://en.wikipedia.org/wiki/Cascading_Style_Sheets)
- [jQuery](https://code.jquery.com/)
- [GitHub](https://github.com/)
- [Slack](https://slack.com/intl/en-ie/)
- [Website Responsive Testing](Toolresponsivetesttool.com)
- [W3 Validator](https://validator.w3.org/nu/)
- [Gmail](https://www.gmail.com/)
- [GTmetrix](gtmetrix.com)
- [Google Fonts](https://fonts.google.com/)
