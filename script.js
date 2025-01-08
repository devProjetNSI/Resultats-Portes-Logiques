function calcul() 
	//cette fonction est celle qui s'active lorsqu'on on appuis sur le bouton calcul dans le site
	//elle permet de recuperer les infos données puis de lancer la bonne fonction en fonction de la porte demander

{
	binaire_1=document.getElementById("binaire_1");
	binaire_2=document.getElementById("binaire_2");
	porte=document.getElementById("porte");
	if(porte.value=="ET")
	{calculET();}
	else if(porte.value=="OU")
	{calculOU();}
	else if(porte.value=="SOIT/OU")
	{calculSOIT();}
	else if(porte.value=="NAND")
	{calculNAND();}
	else if(porte.value=="NOR")
	{calculNOR();}
	else if(porte.value=="XNOR")
	{calculXNOR();}
}

function calculET()
	//cette fonction est celle pour la porte ET(AND) et renvoi le resultat en fonction des 2 nombres donnés dans le site puis renvoi le resultat dans le site
{
	if(binaire_1.value==0)
		{resultat=0}
	else
	{if(binaire_2.value==0)
		{resultat=0}
	
	else
		{resultat=1}
	}
	document.getElementById("resultat").innerHTML=resultat;
}	
	
function calculOU()
	// cette fonction est celle de la porte OU(or) et renvoi le resultat en fonction des 2 nombres donnés dans le site puis renvoi le resultat dans le site
{
	if(binaire_1.value==0)
	{if(binaire_2.value==0)
		{resultat=0}
	
	else 
		{resultat=1}
	}
	else
		{resultat=1}
		
	document.getElementById("resultat").innerHTML=resultat;
}	
function calculSOIT()
	//cette fonction est celle de la porte soit/ou (xor) et renvoi le resultat en fonction des 2 nombres donnés dans le site puis renvoi le resultat dans le site
{
	if(binaire_1.value==0)
	{if(binaire_2.value==0)
		{resultat=0}
		
	else
		{resultat=1}
	}
	else
	{if(binaire_2.value==0)
		{resultat=1}
	
	else 
		{resultat=0}
	}
		
	document.getElementById("resultat").innerHTML=resultat;	
	
}	
function calculNAND()
	//cette fonction est celle de la porte NAND et renvoi le resultat en fonction des 2 nombres donnés dans le site puis renvoi le resultat dans le site
{
	if(binaire_1.value==0)
		{resultat=1}
	else
	{if(binaire_2.value==0)
		{resultat=1}
	
	else 
		{resultat=0}
	}
		
	document.getElementById("resultat").innerHTML=resultat;		
}	
function calculNOR()
	//cette fonction est celle de la porte NOR et renvoi le resultat en fonction des 2 nombres donnés dans le site puis renvoi le resultat dans le site
{
	if(binaire_1.value==0)
	{if(binaire_2.value==0)
		{resultat=1}
	
	else
		{resultat=0}
	}
	else
	{if(binaire_2.value==0)
		{resultat=1}
	else
		{resultat=0}
	}
	
	
	document.getElementById("resultat").innerHTML=resultat;	
}
	
function calculXNOR()
	//cette fonction est celle de la porte XNOR et renvoi le resultat en fonction des 2 nombres donnés dans le site puis renvoi le resultat dans le site
{
	if(binaire_1.value==0)
	{if(binaire_2.value==0)
		{resultat=1}
	
	else
		{resultat=0}
	}
	else
		{resultat=0}
	document.getElementById("resultat").innerHTML=resultat;	
}	
