# User Stories
The goal of this section is to explain to graders how to use the app to evaluate the various user stories. 

- [User Stories](#user-stories)
	- [List Of NFTs](#list-of-nfts)
	- [Admin Team/Person and Admin Management](#admin-teamperson-and-admin-management)
		- [Admin dashboard](#admin-dashboard)
		- [Add New Admin](#add-new-admin)
		- [Add New Team/Person](#add-new-teamperson)
	- [Team/Person Online Reservation Management](#teamperson-online-reservation-management)
		- [Team/Person dashboard](#teamperson-dashboard)
		- [Add New NFT time slot](#add-new-nft-time-slot)
		- [Edit Account](#edit-account)
		- [Add New Completed project](#add-new-completed-project)
		- [Add/remove time slot NFTs](#addremove-time-slot-nfts)
			- [Adding a NFT](#adding-a-nft)
			- [Removing a NFT](#removing-a-nft)
		- [Withdraw](#withdraw)
	- [Customer Functionality](#customer-functionality)
		- [Customer Dashboard](#customer-dashboard)
		- [Purchase](#purchase)
		- [Purchase Reserved NFT](#purchase-reserved-nft)
			- [Accept offer](#accept-offer)
			- [Reject offer](#reject-offer)
		- [Mark Project As Done](#mark-project-as-done)

## List Of NFTs  

**Story:** There are a list of `NFTs` on a `User Dashboard`. In order to see NFTs click on `Display NFTs` where customer can purchase `NFTs` posted by the Store Team/Person.

**Try It Out:** After having created NFTs (see below), go to the homepage (`http://localhost:3000/`) with an account that is neither an `admin` or `Team/Person` and you will see a list of all NFTs. 


## Admin Team/Person and Admin Management 

### Admin dashboard
**Story:** An administrator opens the web app. The web app reads the address and identifies that the user is an admin, showing them admin only functions, such as managing Team/Person and admins. 

**Try It Out:** The account that deploys the contract will by default be an `default admin`. After deploying the contract, simply log into the first account on MetaMask associated with your passphrase and admin only functions will be shown. 

### Add New Admin
**Story:** An admin adds an address to the list of approved admin, so if the owner of that address logs into the app, they have access to the Admin functions, such as managing admins. 

**Try It Out:** To do this, first you will need to visit the homepage (`http://localhost:3000/`) with a `admin` account, and paste address that you want to add as admin. click the `Add New Admin` button. 

Once your transaction has confirmed, refresh the page. Under the `Admin List` header, you should see the address of the account that you added. 

switch back to the account from which you created the Admin, and it should now display Admin functions. 

**Note:**To add more Team/Person, simply visit the home page as an `admin` and enter a desired `Admin`'s address in the `Add Admin` form. After the transaction is confirmed, that account will now also be an `Admin`. 

### Add New Team/Person
**Story:** An admin adds an address to the list of approved Team/Person, so if the owner of that address logs into the app, they have access to the Team/Person functions, such as managing NFTs. 

**Try It Out:** To do this, first you will need to visit the homepage (`http://localhost:3000/`) with a `admin` account, and paste address that you want to add as Team/Person. click the `Add Team/Person` button. 

Once your transaction has confirmed, refresh the page. Under the `Team/Person List` header, you should see the address of the account that you added. 

switch back to the account from which you created the Team/Person, and it should now display Team/Person functions. 

**Note:** To add more Team/Person, simply visit the home page as an `admin` and enter a desired `Team/Person`'s address in the `Add Team/Person` form. After the transaction is confirmed, that account will now also be an `Team/Person`. 


## Team/Person Online Reservation Management 

### Team/Person dashboard
**Story:** An Team/Person opens the web app. The web app reads the address and identifies that the user is an Team/Person, showing them Team/Person only functions, such as managing NFTs and their own account. 

**Try It Out:** log into the Team/Person account on MetaMask associated and Team/Person only functions will be shown. 

### Add New NFT time slot
**Story:** An Market Admins adds an address to the list of approved Team/Person, so if the owner of that address logs into the app, they have access to the Team/Person functions, such as managing NFTs. 

**Try It Out:** To do this, first you will need to visit the homepage (`http://localhost:3000/`) with a `Team/Person` account, and fill out available time in day/week to add as NFT. click the `Add NFT` button. 

Once your transaction has confirmed, refresh the page. Under the `NFT List` header, you should see the info of the NFT that you added. 

switch back to the account from which you created the NFT, and it should now display NFT functions. You can click on a Display NFTs to manage NFTs. 

**Note:** To add more NFTs, simply visit the home page as an `Team/Person` and enter a desired `NFT`'s info in the `Add NFT` form. After the transaction is confirmed, that NFT will now also be an `NFT List`. 


### Edit Account
**Story:** They can edit their own account that will be displayed on the Team/Person dashboard. They can also see the Account Info that admin have already created. 

**Try It Out:** With a `Team/Person` account, on the homepage, you will see a `Edit My Account` section. There, you can enter account info, and after clicking `Save Changes`, it will be created. After the transaction has confirmed, refresh the page to see the new Account Info, along with its `name`,`logo` and `description` under `Your Account Info. To manage the Account Info, simply click on a Edit My Account. 

### Add New Completed project
**Story:** They can add their own projects that will be displayed on the Team/Person dashboard. They can also see the their own project list that they have already added. 

**Try It Out:** With a `Team/Person` account, on the homepage, you will see a `Add Project to Resume` section. There, you can enter project info (smart contract address), and after clicking `Add a Project`, it will be created. After the transaction has confirmed, refresh the page to see the new Resume Info, along with its `name`,`address` and `description` under `Your Resume. To manage the Project, simply click on a Edit My Project. 
Then `Project Added` Event will be trigger. after that chain link function will be called to set star for project.


### Add/remove time slot NFTs
They can add/remove NFTs to the online reservation system. 
 

#### Adding a NFT
As a `Team/Person`, click on `Display NFTs` Button on homepage. fill in the information in the `Add a NFT` section, and click the button. After the transaction is confirmed, refresh the page and click on `Display NFTs` Button, the product should appear in the `NFT List` section.  


#### Removing a NFT
As a `Team/Person`, click on `Remove` Button on any added NFT from the Team/Person Dashboard. after having added a NFT, in the `NFT List` section, you will be able to remove a NFT by clicking on the "Remove" button. Once the transaction is confirmed, refresh the page to see that the NFT is not displayed anymore. 

### Withdraw
They can  withdraw any funds that the NFTs has collected from finished projects.

**Try It Out:** As a `Team/Person`, visit the homepage (`http://localhost:3000/`). Under the name and ID of each NFT, the balance will be listed. A `Team/Person` can use the `Withdraw` button to withdraw the total balance of a NFT(finished project). After the transaction has confirmed, the balance for that NFT will now be 0, and the `Team/Person`'s account balance will have been incremented by the total balance of NFT. Also, they can use withdraw only after NFT's status is finished.

## Customer Functionality 

### Customer Dashboard
**Story:** A customer logs into the app. The web app does not recognize their address so they are shown the User Dashboard. From the main page they can browse all of the NFTs that have been added in the online reservation system. Clicking on the `Display NFTs` button will take them to a NFT page. 

**Try It Out:** After having created at least one NFT, simply visit the homepage (`http://localhost:3000/`) with any account that is neither an `admin` or `Team/Person` to see a list of all NFTs with links to each of them. 

### Purchase
**Story:** They can see a list of NFTs offered by the Team/Person, including their price, balance and id. Customers can purchase a NFT, which will debit their account and send it to the NFT balance. 

**Try It Out:** To purchase a NFT, on page, simply click `Purchase` on desired NFT. A transaction will be created with the amount being the price of the NFT. Once the transaction is confirmed, the value will be sent to the contract. 

### Purchase Reserved NFT
**Story:** They can see a list of NFTs offered by the Team/Person, including their price, balance, reserverd info and id. Customers can purchase a reserved NFT, they should suggest a new price. which will refund current balance to current owner If owner accept this suggestion then debit customer account and send it to the NFT balance. 

**Try It Out:** To purchase a reserved NFT, on page, simply click `Purchase Reserved` on desired NFT then suggest a price and Click "Send Your Offer" Button. Current owner can reject/accept this offer. Also, Customer can see this offer on her/his `Offer list`.
A transaction will be created with the amount being the suggested price for the the NFT. Once the transaction is confirmed, the value from customer account will be sent to contract and NFT balance will be updated.

#### Accept offer
A transaction will be created with the amount being the suggested price for the the NFT. Once the transaction is confirmed, the value from contract will be sent to the current owner account and NFT's owner and balance will be update.
Offer status should change to Accepted.

#### Reject offer
Refund suggested price to account that send this offer. NFT's balance will be update.
status should change to Rejected.

### Mark Project As Done
**Story:** Customer can see list of their NFTs, including their status (Pending/Done). Which make NFT to team/person available to withdraw.

**Try It Out:** To mark NFT as Complete



> Important 
>	- You will need to refresh the page manually after a transaction has confirmed to see the updated state (ex: if creating a new storefront, wait for the transaction to confirm, refresh, and the storefront will be there)

