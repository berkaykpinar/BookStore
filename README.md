
### Book Store is a basic second-hand book selling site. Developed with .Net 5.0 and React.js
            

+ There are two diffent login type : members and admins.
+ Members can open book advertisements. 
+ The ads can be listed after Admins approve the ad.
+ After a member added a new ad on system, this ad will be listed in Admin's Awaiting Approval Page. 
+ Approval processes are listing on Approval logs page with process details like Admin Id,date etc.
+ Making ads active or inactive is possible for Members also Members can delete their ads.
+ While opening a new ad, members have to search author and book. 
If author or book (or both of them) is not registered in library, members have to have add them. 
Thus, the author and book will be added and other member can use them in the future.
+ Books and authors are listing in Library page.
+ Authors and books have individual page.
+ In Author's page, the books whose belongs that author are listing.
+ In book page, The active ads which related to that book are listing.


### Future Goals:
+ Register and Auth will be added.
+ React redux support will be added
+ Library page will be improved.
+ Filtering options will be added.

### Technologies
## Backend: 
.Net 5.0 with Entity Framework Core + Mssql.

## Frontend:
React.js with Semantic Ui,Formik,Axios,React Router Dom.


### Database Diagram
![Screenshot 2021-11-15 003519](https://user-images.githubusercontent.com/83495182/141699521-90b8826e-d963-4132-8bae-ec32cd877384.jpg)
