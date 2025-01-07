function calcul()
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
