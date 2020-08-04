
A Financial Services which provides financial data visualization and analysis-Sandeepan Datta


Table of Contents:
Strategy
Scope
Structure
Skeleton
Surface
Implementation and Reflection

Strategy
1. Name of the site: “aVcon iNternational”
2. Purpose and goals of the site:
•	The purpose of the website is to provide financial data and analysis to retail as well as institutional customers. The site will provide customized data charts to customers who want to use standardized tools to compare companies across different geographies and different accounting standards. 
•	This website will try to derive meaningful interpretation through visualization and help clients in investment purposes (also known as soft dollars). It will also offer various financial research products which a user can use for their investment decisions.
•	The website will also be a unified platform which will give collective financial data from popular financial websites like Yahoo finance. 


3. Audiences
•	Primary audience:  The primary audience will be retails investors (individual customers) and institutional clients (banks, pension funds, portfolio funds) globally. The site is expected to act as a single source of information about financial data, financial products and research. The research and recommendations will solely be based on historic data and may vary with future market conditions. The recommendations should not be treated as legal advice.
•	Secondary audience:  People with no knowledge of the financial markets. New investors, students can get a lot of information about the financial markets by reading different reports and financial data available in the website.

Scope
Ideas for content/function for site:
● Companies covered:
○ Facebook, Apple, Amazon, Netflix, Google, Microsoft, Nvidia, Intel, Oracle
● For each of the 9 companies we will capture:
○ 2019 Sales data in $bn
● Interactive (JavaScript) ideas
○ Different types of charts showing how the sales data look for all the 9 companies.
○ Map that shows the corporate headquarters for aVcon iNternational
○ Form validation for login page
○ Form validation for contact us form
● Resources: Yahoo Finance.
o	For Charts- I plan to use D3.js or charts.js, 
o	For Maps I plan to use Google API/Leaflet
o	Pixlr and other sites with images covered under creative commons.

Structure

This site will be pretty “flat” in structure. The website will have a main home page with a carousel and a navigation bar.
It will have all the pages linked via the navigation bar.
The Financial Charts will give the Financial Data and Charts for a list of companies. It will also include the JavaScript functionality (interactive chart types)
The contact us page will have details regarding a customer contact form.
 


Here’s what I expect my file structure to look like:

./avcon international
|-- javascript/
|   -- script.js/
|   -- script_map.js/
|-- images/
|   -- contact.jpg
|   -- finance.jpg
|   -- study.jpg
|-- stylesheet
|   -- style.css    
|-- index.html
|-- product.html
|-- contact.html
Skeleton

I want the website to demonstrate our company’s ability to visualize and interpret financial data. It will have a log in page, social media contact icons, our location and contact us form
 




Implementation and Reflection

I implemented three parts of the site:
•	The first page is a login page. There is a carousel bar which slides and gives details about the company. The social media connections are in footer of all the pages
•	The Financial Chart page has the financial data represented in different formats( different graphs) based on selection
•	The contact us page gives the location of the company in a dynamic map. It also gives a contact us form

Technology
•	HTML5, CSS3, JavaScript, Bootstrap, Font Awesome 
•	JavaScript libraries
o	jQuery
o	Charts.js for chart
o	Leaflet.js for  dynamic map
•	I collected the 2019 Sales Data for top technology companies from yahoofinance.com. That data was represented in the charts in different chart formats
•	I used Visual Studio Code as my code editor; Pixlr to process images

Content:
•	Yahoo finance had financial statements of all major stock exchange listed technology companies
•	For representing the data I used Chart.js library which provides good visualization tools to look at different chart type.
•	I underestimated how much effort it would take to wrangle the information and create a JavaScript functionality based on dropdown. Also the sliding carousel bar created on the first page using JavaScript was extremely time consuming

Future Directions
•	Build out the charts to include more companies from the technology sector. Also include more companies from other sectors and industries
•	The data should be connected to a backend API which will fetch real time financial data from API via financial data providers such as Bloomberg, Thomson one.
•	I would also like to add financial commentary and recommendations in my website.
•	Page style is pretty basic, so that could use a bit more polish
•	Responsiveness to mobile is OK, but could definitely be improved.
•	I may explore a CSS framework to help with these last two points.

What worked (reasonably) well:
•	I worked in the financial industry and I understand there is a need for good data visualization and big data analysis companies. 
•	The project I worked on can be expanded to areal time business case and real time data analysis will always be in good demand.
•	I used Bootstrap for the first time for the header and carousel bar navigation which is dynamic and gives some basic information about the company. Along with bootstrap I used traditional css for styling and formatting and was able to integrate both in my analysis
•	I used Charts.js for charting which is a bit tricky library (D3.js is more popular but the charts in D3.js are not much relevant for financial industry). But in the end it was well implemented with JavaScript. 
•	I liked the way the map turned out using leaflet.js, including a popup which gives the address and contact details of the company. 
•	The social media icons were implemented using Font Awesome and looked very nice

What would I do differently:
•	I would spend more time on the Financial Charts Page and try to add some textual analysis along with the data
•	I would also have loved to connect to a backend system and pull the data dynamically through API







# frontendwebsite
