import '//cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js'
import '//ajax.googleapis.com/ajax/libs/jqueryui/1.11.2/jquery-ui.min.js'
let amount;
let reach;

let x = window.innerWidth - 400;

document.querySelector('.donate form').addEventListener("click", () => {
 document.querySelectorAll('#donAmount input').forEach(input => {
  if (input.checked){
    console.log(input.value)
    amount = input.value
  } 
 });
  reach = amount * 21;
  document.querySelector('#confirm .amount').textContent = ("$" + amount);
  document.querySelector('#check span').textContent = ("$" + amount);
  document.querySelector('#confirm strong').textContent = (reach + " voters");
});

document.querySelector(".donate button").addEventListener("click", ()=>{
  document.querySelector(".donate").classList.toggle("active");
  if(document.querySelector(".donate").classList.contains("active") ) {
    $("form").slideDown(450, "easeOutQuart");
  } else {
    $("form").slideUp(300, "easeInOutQuad");
  }
});

document.querySelectorAll('.donate label').forEach(label => {
label.addEventListener("click", ()=>{
    setTimeout(() => {
      if (amount == "other"){
        document.querySelector("#custom").style.marginLeft = x/2;
   document.querySelector("#custom").style.marginRight = x/2;
   document.querySelector('#donations').classList.add('custom');
          $(".donate").hide("slide", { easing: "easeInQuart", direction: "left" }, 700, function(){
              $("#custom").show("slide", { easing: "easeOutQuart", direction: "right" }, 700);
          });
        } else {
          document.querySelector('#donations').classList.remove('custom');
          $(".donate").hide("slide", { easing: "easeInQuart", direction: "left" }, 700, function(){
              $("#details").show("slide", { easing: "easeOutQuart", direction: "right" }, 700);
            });
        }
    }, 150);
  });
})

document.querySelector('#custom .next').addEventListener("click", ()=>{
  amount = document.querySelector('#customDonation input[name=custom-amount]').value;
  reach = amount * 21;
  document.querySelector('#confirm .amount').textContent = ("$" + amount);
  document.querySelector('#check span').textContent = ("$" + amount);
  document.querySelector('#confirm strong').textContent = (reach + " voters");
  $("#custom").hide("slide", { easing: "easeInQuart", direction: "left" }, 700, function(){
    $("#details").show("slide", { easing: "easeOutQuart", direction: "right" }, 700);
  });
});

document.querySelector('#custom .back').addEventListener("click", () => {
  $("#custom").hide("slide", { easing: "easeInQuart", direction: "right" }, 700, function(){
    $(".donate").show("slide", { easing: "easeOutQuart", direction: "left" }, 700);
  });
});

document.querySelector('#details .next').addEventListener("click", () => {
  console.log(amount);
  $("#details").hide("slide", { easing: "easeInQuart", direction: "left" }, 700, function(){
    $("#card").show("slide", { easing: "easeOutQuart", direction: "right" }, 700);
  });
});

document.querySelector('#details .back').addEventListener("click", () => {
  
  if ( document.querySelectorAll('#donations .custom').length > 0 ){
      $("#details").hide("slide", { easing: "easeInQuart", direction: "right" }, 700, function(){
    $("#custom").show("slide", { easing: "easeOutQuart", direction: "left" }, 700);
  });
  } else {
      $("#details").hide("slide", { easing: "easeInQuart", direction: "right" }, 700, function(){
    $(".donate").show("slide", { easing: "easeOutQuart", direction: "left" }, 700);
  });
  }
  
});

document.querySelector('#card .next').addEventListener("click", () => {
  $("#card").hide("slide", { easing: "easeInQuart", direction: "left" }, 700, function(){});
});

document.querySelector('#card .back').addEventListener("click", () => {
  $("#card").hide("slide", { easing: "easeInQuart", direction: "right" }, 700, function(){
    $("#details").show("slide", { easing: "easeOutQuart", direction: "left" }, 700);
	});
});

document.querySelector('#card .next').addEventListener("click", () => {
  $("#card").hide("slide", { easing: "easeInQuart", direction: "left" }, 700, function(){
    $("#check").show("slide", { easing: "easeOutQuart", direction: "right" }, 700);
  });
});

// document.querySelector('#check .back').addEventListener("click", () => {
//   $("#check").hide("slide", { easing: "easeInQuart", direction: "right" }, 700, function(){
//     $("#card").show("slide", { easing: "easeOutQuart", direction: "left" }, 700);
// 	});
// });

document.querySelector("#check .next").addEventListener('click', () => {
  $("#check").hide("slide", { easing: "easeInQuart", direction: "left" }, 700, function(){
    $(".processing").fadeIn(1500, function(){
      $(".progress").animate({ width: "14em" }, 3500, "easeInOutCirc", function() {
        $( ".mask" ).hide("slide", { easing: "easeInQuart", direction: "right" }, 400);
      });
    });
  });
  
	setTimeout(function() {
		$('.processing .message, .outer').fadeOut();
        document.querySelector("#confirm").classList.add('animated', 'fadeInUp');
	}, 6250);
});
