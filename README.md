# Feelog


## Overview
  
   Our app requires the ability to analyze any textual content and determine its **emotional polarity**. Basically look for any word pertaining to some emotion and rate the overall text, which way it leans the most. Also, we would need a tool to automatically search through websites and retrieve information related to the need. We have a couple of things considered as of now, that can potentially be of use. IBM Watson has a built-in API called the **Natural Language Understanding**, which is capable of deciding on what a specific block of text means. Where it stands in terms of emotion, sentiment, concept, etc. That’s a great tool to implement for what we are trying to build. To search for content based on user input,  we can use Google’s custom search API. It allows the user to predefine the set of websites it retrieves information from. That way the app can always provide a more narrowed down search rather than a google search. 

   Testing working on different branch
   To Run:
   for api its npm run dev
   client is npm start