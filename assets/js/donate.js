import '//cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js'
import '//ajax.googleapis.com/ajax/libs/jqueryui/1.11.2/jquery-ui.min.js'

document.querySelector('#donate').innerHTML = `
<div class="donate">
    <button>Donate</button>
    <form name="donAmount" id="donAmount">
      <input type="radio" value="3" name="amount" id="three">
      <label for="three">$3</label>
      <input type="radio" value="25" name="amount" id="twentyfive">
      <label for="twentyfive">$25</label>
      <input type="radio" value="100" name="amount" id="hundred">
      <label for="hundred">$100</label>
      <input type="radio" value="other" name="amount" id="other">
      <label for="other">Other</label>
    </form>
    </div>
    
    <div id="custom">
      <h2>Donation Amount</h2>
      <form name="customDonation" id="customDonation">
      <div class="input-group-1">
        <label for="custom-amount">$</label>
        <input id="custom-amount" name="custom-amount" type="text">
        <div class="warn"></div>
      </div>
      </form>
      <div class="clearfix">
        <button class="back" type="button">Back
          <span></span>
          <span></span>
          <span></span>
        </button>
        <button class="next" type="button">Next</button>
      </div>
    </div>
    
    <section id="details">
      <div class="contact-info">
      <h2>Basic Information</h2>
      <form class="clearfix">
        <div class="input-group-2">
        <label>First Name</label>
        <input type="text">
        </div>
        <div class="input-group-2">
        <label>Last Name</label>
        <input type="text">
        </div>
        <div class="input-group-1">
        <label>Email Address</label>
        <input type="text">
        </div>
        <hr>
        <div class="input-group-1">
        <label>Street Address</label>
        <input type="text">
        </div>
        <div class="input-group-3">
        <label>City</label>
        <input type="text">
        </div>
        <div class="input-group-3">
        <label>State</label>
        <input type="text">
        </div>
        <div class="input-group-3">
        <label>Zip Code</label>
        <input type="text">
        </div>
      </form>
      <div class="clearfix">
        <button class="back" type="button">Back
          <span></span>
          <span></span>
          <span></span>
        </button>
        <button class="next" type="button">Next</button>
      </div>
      </div>
    </section>
    
    <section id="card">
        <div class="contact-info">
      <h2>Payment Information</h2>
      <form class="clearfix">
        <div class="input-group-1">
        <label>Card Number</label>
        <input type="text">
        </div>
        <div class="clearfix">
        <div class="input-group-2">
        <label>Expiration Date</label>
        <input type="text">
        </div>
        
        <div class="input-group-2">
        <label>Security Code (CVV)</label>
        <input type="text">
        </div>
        </div>
        <hr>
        <div class="input-group-1">
        <label>Employer</label>
        <input type="text">
        </div>
        
        <div class="input-group-1">
        <label>Occupation</label>
        <input type="text">
        </div>
      </form>
      <div class="clearfix">
        <button class="back" type="button">Back
          <span></span>
          <span></span>
          <span></span>
        </button>
        <button class="next" type="button">Review</button>
      </div>
      </div>
    </section>
    
    <section class="processing">
    <div class="check">
      <span></span>
      <div class="mask">
      </div>
      <span></span>
    </div>
    
    <div class="outer">
      <div class="inner">
      </div>
      <div class="progress">
      </div>
    </div>
    <span class="message">Processing</span>
    </section>
    
    <section id="check">
      <h2>Confirm Payment</h2>
      <p>Please confirm your contribution of</p>
      <span>$</span>
      <button class="next" type="button">Confirm</button>
    </section>
    
    <section id="confirm">
      <h2>Thank You!</h2>
      <p>Your <span class="amount">$</span> donation will help this small aspiring author to reach <strong>Even Higher</strong>!</p>
    </section>
`

let amount;
let reach;

let x = window.innerWidth - 400;

document.querySelector('.donate form').addEventListener("click", () => {
 document.querySelectorAll('#donAmount input').forEach(input => {
  if (input.checked){
    amount = input.value
  } 
 });
  reach = amount * 21;
  document.querySelector('#confirm .amount').textContent = ("$" + amount);
  document.querySelector('#check span').textContent = ("$" + amount);
  // document.querySelector('#confirm strong').textContent = (reach + " voters");
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
   document.querySelector('#donate').classList.add('custom');
          $(".donate").hide("slide", { easing: "easeInQuart", direction: "left" }, 700, function(){
              $("#custom").show("slide", { easing: "easeOutQuart", direction: "right" }, 700);
          });
        } else {
          document.querySelector('#donate').classList.remove('custom');
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
  // document.querySelector('#confirm strong').textContent = (reach + " voters");
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
  $("#details").hide("slide", { easing: "easeInQuart", direction: "left" }, 700, function(){
    $("#card").show("slide", { easing: "easeOutQuart", direction: "right" }, 700);
  });
});

document.querySelector('#details .back').addEventListener("click", () => {
  
  if ( document.querySelectorAll('#donate .custom').length > 0 ){
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
      $(".progress").animate({ width: "18.5em" }, 3500, "easeInOutCirc", function() {
        $( ".mask" ).hide("slide", { easing: "easeInQuart", direction: "right" }, 400);
      });
    });
  });
  
	setTimeout(function() {
		$('.processing .message, .outer').fadeOut();
        document.querySelector("#confirm").classList.add('animated', 'fadeInUp');
	}, 6250);
});
