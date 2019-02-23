$(function(){


	var dd = $('#dd');
	var choice = $('ul.dropdownIn > li');
	var index = -1;


	dd.click(function(){

		 $(this).toggleClass('active');
		 return false;

	})


	choice.click(function(){

		var text = $(this).text();

		$(this).index(index);
		dd.children('span').text(text);

	})

//-------------------------------------------------------------------------------
	$(".KriptoPro").webuiPopover({
	style:"inverse",
	placement: "top",
	width:"300",
	content: "На данный момент в связи с изменениями в законодательстве для осуществления официальных запросов в государственные службы при помощи онлайн-служб требуется получить ЭЦП для портала Росреестра. ",
	trigger: "hover",
	padding:true,
	delay: {
		show: 1,
		hide: 300
	}
	});

//-------------------------------------------------------------------------------------

	var button = $(".reset");

	button.click(function(){
		var wrapper = $(this).parent('div');		
		wrapper.children('input').val('');
		wrapper.children('p').css({
			color:"gray",
		})

	});

//---------------------------------------------------------------------------------
	
	var require = $('#form input').filter("[required]:visible");
	console.log(require);
	
	require.keyup(updateTitle);
	require.click(updateTitle);
	require.blur(function(){
		var wrap = $(this).parent('div');
		wrap.children('p').css({
			color:"gray",
		})
	})
		
	
    function updateTitle(){
		var wrap = $(this).parent('div');	
		$(this).css({
			color:"black",
		})	
		if($(this).val() == "")
		{
			wrap.children('p').css({
			color:"red",
		});
		}
		else
		{
			wrap.children('p').css({
			color:"black",
		});
		}
	}

//---------------------------------------------------------------------------------

	var comment = $('#form input#comm');
	var commP = comment.prev('p');
	
	comment.click(function(){
		commP.css({
			color:"black"
		})
	}).blur(function(){
		commP.css({
			color:"gray"
		})
	})


//----------------------------------------------------------------------------------
	
	var price =$('p.priceTag');		
	var sum = 1600;

	var check = $('input[type=checkbox]');
	check.click(function(){
		var costCheck = $(this).val();

		if($(this).is(':checked')){
			sum += parseInt(costCheck,10);							
			var cost = $(this).nextAll('p.cost');
			console.log(cost);						
			cost.css({
				display:"block",
			})
		}
		else{
			var cost = $(this).nextAll('p.cost');
			sum -= parseInt(costCheck,10);
			console.log(cost);
				cost.css({
				display:"none",
			})
		}
		price.html(sum);
	})
//------------------------------------------------------------------------------


	var svgAcc = $("svg#dropAcc");
	svgAcc.click(function(){
	
		var Acc = $("#accordeon");
		console.log(svgAcc);
		Acc.toggle( "slide" );	
			
	})

//---------------------------------------------------------------------------

	var submit = $("#submit");
	submit.click(function(){		
		if($("input#name").val().match(/^[а-яА-Я]+ [а-яА-Я]+\s?$/) == null)
		{			
			$("input#name").css({
				color:"red",
			})
		}
		if($("input#phone").val().match(/^\+7\d{10}$/) == null)
		{			
			$("input#phone").css({
				color:"red",
			})
		}
		if($("input#email").val().match(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,}$/) == null)
		{			
			$("input#email").css({
				color:"red",
			})
		}
		if($("input#org").val().match(/^[\w\- ]{2,}$/) == null)
		{			
			$("input#org").css({
				color:"red",
			})
		}
	})



});