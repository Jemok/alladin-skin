
/**#########toggle elements for login#########**/
function loginPntsToggle(currentLoginToggle){
var loginToggleVal = currentLoginToggle.value;

if(loginToggleVal == 'yes'){
	//unhide tr and login points element
	document.getElementById("label-login-points").style.display = "block";
	document.getElementById("label-login-interval").style.display = "block";
	document.getElementById("login_interval").style.display = "block";
	document.getElementById("login_interval_flag").style.display = "block";
document.getElementById("login_points").style.display = "block";
}
if(loginToggleVal == 'no'){
	//unhide tr and login points element
	document.getElementById("label-login-points").style.display = "none";
	document.getElementById("label-login-interval").style.display = "none";
	document.getElementById("login_interval").style.display = "none";
	document.getElementById("login_interval_flag").style.display = "none";
document.getElementById("login_points").style.display = "none";
}

} 
 
 
/**##############toggle elements visible due to changes in period##################**/		
	function alPeriodChange(currentSelectElement){
	var alSelectVal = currentSelectElement.value;
	//get several attributes ie id
	var alIdAttr = currentSelectElement.getAttribute("id");
	var attrArray = stringToArray(alIdAttr,"_");
	var selectNameDifferentiator = attrArray[0];
	var selectUniqueIdentifier = attrArray[attrArray.length-1];
	//function
	alSelectHideUnhide(alSelectVal,selectNameDifferentiator,selectUniqueIdentifier);
	} 

	function alSelectHideUnhide(selectVal,selectUniqueName,selectUniqueId){
	//hide and unhide card gift period
	var periodSelectCustId =  "period_flag_" + selectUniqueId;
	var monthSelectCustId =  "month_flag_" + selectUniqueId;
	var weekSelectCustId =  "week_flag_" + selectUniqueId;
	var daySelectCustId =  "day_flag_" + selectUniqueId;

	//use the name
	if(selectUniqueName == "period"){
		//get the value and hide/unhide elements
		if(selectVal == "annualy"){
			//unhide all
			document.getElementById(periodSelectCustId).style.display = "block";
			document.getElementById(monthSelectCustId).style.display = "block";
			document.getElementById(weekSelectCustId).style.display = "block";
			document.getElementById(daySelectCustId).style.display = "block";

		}
		if(selectVal == "monthly"){
			//unhide all except monthly select
			document.getElementById(periodSelectCustId).style.display = "block";
			document.getElementById(monthSelectCustId).style.display = "none";
			document.getElementById(weekSelectCustId).style.display = "block";
			document.getElementById(daySelectCustId).style.display = "block";
		}
		if(selectVal == "weekly"){
				//unhide all except monthly and weekly select
				document.getElementById(periodSelectCustId).style.display = "block";
			document.getElementById(monthSelectCustId).style.display = "none";
			document.getElementById(weekSelectCustId).style.display = "none";
			document.getElementById(daySelectCustId).style.display = "block";
		}
	}

	}
          /**##############add a dynamic rule##################**/
         //add dynamic alpesa rule
         function addDynamicAlpesaRule(){
         var alnewRule = document.getElementById("dynamic-rules-tr-holder");
         var alnewRuleClone = alnewRule.cloneNode(true);

         //remove the id attribute from the tr element.
         alnewRuleClone.removeAttribute("id");

         //function
         updateElementsAppend(alnewRuleClone);

         }

         function updateElementsAppend(alnewRuleClone){

         	//get the ruleItemId by looping through the value of the input "dynamicRulesIdInput"
         	var jsDynamicRulesId = '';
         	var jsRuleItemId = '';

         	//function
         	var specifInputRulesIds = specicRulesItemIds("dynamicRulesIdInput");
         	var dynamicRulesIdInputSpecificValue = specifInputRulesIds.value;
         	//alert(dynamicRulesIdInputSpecificValue);

         	 jsRuleItemId = getUniqueIdValue(dynamicRulesIdInputSpecificValue);

         	//update the value of the dyanamicRulesIdInput
         	//function
         	updateReplaceElementValue(specifInputRulesIds,'update',jsRuleItemId);

         	//set the attribute ruleItemId and Id to tr
         	alnewRuleClone.setAttribute("ruleItemId",jsRuleItemId);
         	alnewRuleClone.setAttribute("id",jsRuleItemId);

         	//set the names of all the select and input values with the value of ruleItemId
         	//function
         	setRuleInputNames(alnewRuleClone,jsRuleItemId);

         	//append to the main table
         document.getElementById("dynamic-rules-table").appendChild(alnewRuleClone);

         }

         function setRuleInputNames(custParentElement,custParentId){
         	//sets the names of all children input elements

         	/**get the children
         	get the attribute ie setiddynamically="true"
         	if true increment a counter and set the name of the input element**/

         		var kids = custParentElement.children;
         		var kidsCounter = 0;

         	for(var i=0;i<kids.length;i++){

         			var kidsChildren =  kids[i].children;

         			for(var j=0;j<kidsChildren.length;j++){

					if(kidsChildren[j].getAttribute("setiddynamically") == 'true'){
         			//increment the counter
         				kidsCounter += 1;

         				//set the name,id of the input element
         				//function
         				elementSetRuleInputNamesIds(kidsChildren[j],custParentId,kidsCounter);

         				}
         			}
         			
         		
         	}

         	//use the parent id and a random id to insert names
         	//update the attributes of the conditional rules
         	//function
         	//conditionElementRuleNamesId(custParentElement)
         
         }

         function elementSetRuleInputNamesIds(currElement,currParentId,currCounterVal){
         	//set name attribute
         	//set id attribute

         	if(currCounterVal == 1){
         		currElement.setAttribute("name","points_target_" + currParentId);
         		currElement.setAttribute("id","points_target_" + currParentId);
         	}

         	if(currCounterVal == 2){
         		currElement.setAttribute("name","per_visit_spending_" + currParentId);
         		currElement.setAttribute("id","per_visit_spending_" + currParentId);
         	}

         	if(currCounterVal == 3){
         		currElement.setAttribute("name","dyno_point_reward_" + currParentId);
         		currElement.setAttribute("id","dyno_point_reward_" + currParentId);
         	}

         	
         }

         /**#############add specific condition###################**/
         
         //add dynamic alpesa condition
         function addAlConditionOp(currentElementButton){
         	//get the condition element
         	var alnewRuleCondition = document.getElementById("dynamic-rules-condition-holder");
         var alnewRuleConditionClone = alnewRuleCondition.cloneNode(true);

         //remove the id attribute from the div element.
         alnewRuleConditionClone.removeAttribute("id");
         
         	//get the parentNode
         	var alParentNode = currentElementButton.parentNode;
         	
         	//create the condition for the new rule
         	createNewCondition(alnewRuleConditionClone,alParentNode)
         
         }
         
         //create the condition for each rule.
         function createNewCondition(alnewRuleConditionClone,alParentNode){
         
         		//get the child
         	var kids = alParentNode.childNodes;
         	for(var i=0;i<kids.length;i++){
         
         		//var childNodeNamed = kids[i].nodeName;
         
         		if(kids[i].nodeName == 'BUTTON'){
         alParentNode.insertBefore(alnewRuleConditionClone,kids[i]);
         		}
         	}

         	var parentElementChild = alParentNode.parentNode;

         	//update the names and ids of the input elements
         	//function
         	conditionElementRuleNamesId(parentElementChild,alnewRuleConditionClone);
         
         }


       	function conditionElementRuleNamesId(parentElementCust,currentImmediateParent){
       		//get the id of the parent
       		var parentId = parentElementCust.getAttribute("ruleitemid");
       		//traverse down the tree and update the names and ids' of the conditinal statements using random generator and also updating the values of an input containing all the values.

       		//function
       		var specifInputRulesConditionalIds = specicRulesItemIds("conditionalRulesIdInput");
         	var dynamicRulesIdInputSpecificValueConditional = specifInputRulesConditionalIds.value;
         	//alert(dynamicRulesIdInputSpecificValue);
         	var jsConditionItemId = getUniqueIdValue(dynamicRulesIdInputSpecificValueConditional);

         	//update the value of the dyanamicRulesIdInput
         	//function
         	updateReplaceElementValue(specifInputRulesConditionalIds,'update',jsConditionItemId);

         	//set the attributes of the current immediate parent
         	currentImmediateParent.setAttribute("conditionitemid",jsConditionItemId);
         	currentImmediateParent.setAttribute("id",jsConditionItemId);

         	//reset the names of children currently inside this parent element. ie name_mainParentId_immediateParentId
         	// setconditiondynamicaly="true"
       updateElementConditionSpecific(currentImmediateParent,parentId,jsConditionItemId);


       	}

       	function updateElementConditionSpecific(currentImmediateCustParent,topParentIdentifier,immediateParentIdentifier){

       		 	//reset the names of children currently inside this parent element. ie name_mainParentId_immediateParentId
         	// setconditiondynamicaly="true"
         	  	var mekids = currentImmediateCustParent.children;
         	  	var mekidsCounter = 0;
         	  	var mekidChildCounter = 0 ;

         	for(var i=0;i<mekids.length;i++){

         			if(i !== 3){

         				//set the name,id of the input element
         				//function
         				if(mekids[i].getAttribute("setconditiondynamicaly") == 'true'){
         					mekidsCounter += 1;
         					elementConditionalSetRuleInputNamesIds(mekids[i],topParentIdentifier,immediateParentIdentifier,mekidsCounter,false);
         				}
         				

         			}else{

				var kidsChildren =  mekids[i].children;

         			for(var j=0;j<kidsChildren.length;j++){

					if(kidsChildren[j].getAttribute("setconditiondynamicaly") == 'true'){
         				//set the name,id of the input element
         				//function
         				mekidChildCounter += 1;
         				elementConditionalSetRuleInputNamesIds(kidsChildren[j],topParentIdentifier,immediateParentIdentifier,mekidChildCounter,true);

         				}
         			}

         			}

         	}

       	}

       	function elementConditionalSetRuleInputNamesIds(currElement,custTopParentId,custImmediateParentId,elCounter,isKiddling){
         	//set name attribute
         	//set id attribute

         	if(isKiddling == false){

         	if(elCounter == 1){
         		currElement.setAttribute("name","condition_scope_" + custTopParentId + "_" + custImmediateParentId);
         		currElement.setAttribute("id","condition_scope_" + custTopParentId + "_" + custImmediateParentId);
         	}

         	if(elCounter == 2){
         		currElement.setAttribute("name","condition_visits_" + custTopParentId + "_" + custImmediateParentId);
         		currElement.setAttribute("id","condition_visits_" + custTopParentId + "_" + custImmediateParentId);
         	}
	

         	}

     		if(isKiddling == true){
     			currElement.setAttribute("name","condition_operator_" + custTopParentId + "_" + custImmediateParentId);
         		currElement.setAttribute("id","condition_operator_" + custTopParentId + "_" + custImmediateParentId);
     		}

         	
         }
         

  //remove a conditional rule
         function removeConditionalDynamicAlRule(currentElementButton){

         	//navigate to parent
         	var topParent = currentElementButton.parentNode.parentNode;
         	var topParentId = topParent.getAttribute("conditionitemid");

         	//get the values of the input
         	var specifInputRulesIds = specicRulesItemIds("conditionalRulesIdInput");
         	var dynamicRulesIdInputSpecificValue = specifInputRulesIds.value;

         	//remove this item from the input values
         	//function
         	var idsNewArray = arrayOps(stringToArray(dynamicRulesIdInputSpecificValue,","),"remove",topParentId);
         	//reassign the values back to the input value
         	//function
         	updateReplaceElementValue(specifInputRulesIds,"replace",arrayToString(idsNewArray,","));

         	//navigate up the hierachy of parents and remove the div element.
         	topParent.remove();
         }

 /**#################remove ###############**/

         //remove a rule
         function removeDynamicAlRule(currentElementButton){
         	//navigate up the hierachy of parents and remove the tr element.
         	var currentParentNode = currentElementButton.parentNode.parentNode;
         	var currentRuleItemId = currentParentNode.getAttribute("ruleitemid");

         	//remove the id from the input containing all the unique ids
         	//function
         	var specifInputRulesIds = specicRulesItemIds("dynamicRulesIdInput");
         	var dynamicRulesIdInputSpecificValue = specifInputRulesIds.value;

         	//remove this item from the input values
         	//function
         	var idsNewArray = arrayOps(stringToArray(dynamicRulesIdInputSpecificValue,","),"remove",currentRuleItemId);
         	//reassign the values back to the input value
         	//function
         	updateReplaceElementValue(specifInputRulesIds,"replace",arrayToString(idsNewArray,","));

         	//remove the tr holding the data
         	currentParentNode.remove();
         }
         

			 /**#################manage cards###############**/
			function addCardType(currentButton){
				//add the cards
				//get the clone
				var alnewCardRule = document.getElementById("dynamic-card-rules-tr-holder");
         		var alnewCardRuleClone = alnewCardRule.cloneNode(true);

         		//remove the id attribute
         		alnewCardRuleClone.removeAttribute("id");
				
				//get unique id values
         	//function
         	var cardInputRulesIds = specicRulesItemIds("cardRulesIdInput");
         	var cardRulesIdInputSpecificValue = cardInputRulesIds.value;
         	//function
         	 var jsCardRuleItemId = getUniqueIdValue(cardRulesIdInputSpecificValue);

         	 //update the values input
         	 //function
         	updateReplaceElementValue(cardInputRulesIds,'update',jsCardRuleItemId);

         	//set the attribute cardruleid,id
         	alnewCardRuleClone.setAttribute("cardruleid",jsCardRuleItemId);
         	alnewCardRuleClone.setAttribute("id",jsCardRuleItemId);
				//update the element names
				//function
				cardUpdateInputNames(alnewCardRuleClone,jsCardRuleItemId);

				//append to the main table
         document.getElementById("card-rules-table-holder").appendChild(alnewCardRuleClone);
		 
		 //re-initialize jsColor
		 //function
		 initializeJsColorCust();

			}

			function cardUpdateInputNames(currentParentElement,uniqueIdCust){
				//update the input names
				var kidsCounter = 0;
				var cardKids = currentParentElement.children;

				 	for(var i=0;i<cardKids.length;i++){

         			var kidsChildren =  cardKids[i].children;

         			for(var j=0;j<kidsChildren.length;j++){

					if(kidsChildren[j].getAttribute("setcarddynamicaly") == 'true'){
         			//increment the counter
         				kidsCounter += 1;

         				//set the name,id of the input element
         				//function
         				cardSetElementNames(kidsChildren[j],kidsCounter,uniqueIdCust);

         				}
         			} 
         			
         		
         	}

			}

			function cardSetElementNames(currentChildElement,custCounter,uniqueIdentifier){
				//set the names and id attributes
				if(custCounter == 1){
         		currentChildElement.setAttribute("name","card_name_" + uniqueIdentifier);
         		currentChildElement.setAttribute("id","card_name_" + uniqueIdentifier);
         	}

         		if(custCounter == 2){
         		currentChildElement.setAttribute("name","card_color_" + uniqueIdentifier);
         		currentChildElement.setAttribute("id","card_color_" + uniqueIdentifier);
         	}

         		if(custCounter == 3){
         		currentChildElement.setAttribute("name","card_min_points_" + uniqueIdentifier);
         		currentChildElement.setAttribute("id","card_min_points_" + uniqueIdentifier);
         	}

         		if(custCounter == 4){
         		currentChildElement.setAttribute("name","card_max_points_" + uniqueIdentifier);
         		currentChildElement.setAttribute("id","card_max_points_" + uniqueIdentifier);
         	}

         		if(custCounter == 5){
         		currentChildElement.setAttribute("name","card_voucher_amount_" + uniqueIdentifier);
         		currentChildElement.setAttribute("id","card_voucher_amount_" + uniqueIdentifier);
         	}

         		if(custCounter == 6){
         		currentChildElement.setAttribute("name","card_prod_discount_" + uniqueIdentifier);
         		currentChildElement.setAttribute("id","card_prod_discount_" + uniqueIdentifier);
         	}

         		if(custCounter == 7){
         		currentChildElement.setAttribute("name","period_flag_" + uniqueIdentifier);
         		currentChildElement.setAttribute("id","period_flag_" + uniqueIdentifier);
         	}

         		if(custCounter == 8){
         		currentChildElement.setAttribute("name","month_flag_" + uniqueIdentifier);
         		currentChildElement.setAttribute("id","month_flag_" + uniqueIdentifier);
         	}

         		if(custCounter == 9){
         		currentChildElement.setAttribute("name","week_flag_" + uniqueIdentifier);
         		currentChildElement.setAttribute("id","week_flag_" + uniqueIdentifier);
         	}

         		if(custCounter == 10){
         		currentChildElement.setAttribute("name","day_flag_" + uniqueIdentifier);
         		currentChildElement.setAttribute("id","day_flag_" + uniqueIdentifier);
         	}

			}

			function removeCardType(thisBtnElement){
				//navigate up the hierachy get the id of parent and delete parent
				var currentParentNode = thisBtnElement.parentNode.parentNode;
         	var currentRuleItemId = currentParentNode.getAttribute("cardruleid");

         	//remove the id from the input containing all the unique ids
         	//function
         	var cardInputRulesIds = specicRulesItemIds("cardRulesIdInput");
         	var cardRulesIdInputSpecificValue = cardInputRulesIds.value;

         	//remove this item from the input values
         	//function
         	var idsNewArray = arrayOps(stringToArray(cardRulesIdInputSpecificValue,","),"remove",currentRuleItemId);
         	//reassign the values back to the input value
         	//function
         	updateReplaceElementValue(cardInputRulesIds,"replace",arrayToString(idsNewArray,","));

         	//remove the tr holding the data
         	currentParentNode.remove();
			}

         /**##############global functions##################**/

         function specicRulesItemIds (inputName){
         	var dynamicRulesIdInputValues = document.getElementsByName(inputName);
         	return dynamicRulesIdInputValues[0];
         }

         function updateReplaceElementValue(alElement,alOpType,alValue){
         	/**updates or replaces the value of an element**/
         	//alOpType = replace/update

         	if(alOpType == "update"){

         		//update with "," separator
         		var inputVal = alElement.value;
         		if(inputVal == ""){
         			//if empty
         			alElement.value = alValue;
         		}else{
         			alElement.value = inputVal + "," + alValue;
         		}

         	}

         	if(alOpType == "replace"){
         		alElement.value = alValue;
         	}

         	
         }

         function removeSetElementAttribute(alElement,alOpType,alAttr,alValue){
         	/**updates or replaces the value of an element**/
         	//alOpType = set/remove
         	alOpType = 'set';
         	alValue = '';
         }

         function randomIntInclusive(min,max){
         	//returns a random integer min and max included
         	//var min,max;
         	if(min == ""){
         		min = 1;
         	}

         	if(max == ""){
         		max = 1000000;
         	}
         	return Math.floor(Math.random() * (max - min + 1)) + min;
         }

         function stringToArray(custString,custSeparator){
         	//converts a string to an array object
         	return custString.split(custSeparator);
         }
       
       	function arrayToString(custArray,custSeparator){
       		//converts array to string
       		return custArray.join(custSeparator);
       	}

       	function arrayOps(custArray,op,itemNeedle){
       		//check,remove item from an array
       		//op = check,remove
       		var opstatus = false;
       		for(i in custArray){

       			//if check
       			if(op == "check"){
       				//confirm if item exists
       				if(custArray[i] == itemNeedle){
       					opstatus =  true;
       				}
       			}

       			//if remove
       			if(op == "remove"){
       				//remove item if exists from the array 
       				if(custArray[i] == itemNeedle){
       					custArray.splice(i,1);
       				}
       			}

       		}

       		//return operations
       		//if check
       			if(op == "check"){
       				//return true/false
       				return opstatus;
       			}

       			//if remove
       			if(op == "remove"){
       				//return the newly formed array
       				return custArray;
       			}

       	}

       	function getUniqueIdValue(inputValsString){

       		var uniquIdValCust = 1;

         	if(inputValsString == ""){

         		//set the value to 1 if input is empty ie no rule items exist.
         		//function
         		uniquIdValCust = randomIntInclusive("","");

         	}else{
         		//generate a random identifier and confirm that it does not exist among the values of the input
         		//function
         		var itemRandId = randomIntInclusive("","");
         		//jsRuleItemId = itemRandId;
         		//function
         		var inputValuesArrayed = stringToArray(inputValsString,",");

         		//ensure the random value does not exist.
         		//function
         		while(arrayOps(inputValuesArrayed,"check",itemRandId) == true){
         			//function
         			itemRandId = randomIntInclusive("","");
         		}

         		uniquIdValCust = itemRandId;

         	}
         	return uniquIdValCust;
       	}
		
		function initializeJsColorCust(){
			jscolor.installByClassName("jscolor");
		}