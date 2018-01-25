// nav menu js
function openNav() {
    document.getElementById("mySidenav").style.width = "75%";
    document.getElementById("ixiolab-navbar").style.width = "100%";
    document.body.style.backgroundColor = "rgb(255,255,255)";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.body.style.backgroundColor = "rgba(0,0,0,0)";
}

//  card Flip js
new Vue({
  el: '#carousel3d',
  data: {
    slides: 7
  },
  components: {
    'carousel-3d': Carousel3d.Carousel3d,
    'slide': Carousel3d.Slide
  }
})
new Vue({
  el: '#example',
  data: {
    slides: 7
  },
  components: {
    'carousel-3d': Carousel3d.Carousel3d,
    'slide': Carousel3d.Slide
  }
})
new Vue({
  el: '#example1',
  data: {
    slides: 7
  },
  components: {
    'carousel-3d': Carousel3d.Carousel3d,
    'slide': Carousel3d.Slide
  }
})
if(window.matchMedia("(max-width: 768px)").matches){
  $('.serach input,.control-button').click(function(e){
    $('.control-button').hide();
    $('.control-close').show();
    $('.filter-para ').fadeIn();
    $('.packages-section').css({'opacity':'0.2'});
    e.stopPropagation();
    // return false;
  })
  $('.filter-para ').click(function(e){
      e.stopPropagation();
  });
  $('body').click(function(e){
    $('.filter-para ').fadeOut();
    $('.control-button').show();
    $('.control-close').hide();
    $('.packages-section').css({'opacity':'1'});
  })  
}

$('#payment').bootstrapValidator({
    fields: {
        user:{
            validators: {
              notEmpty: {
                message: 'The locality is required'
              }
            }
        },
        mobile: {
            validators: {
                remote: {
                        message: 'Mobile Number already exist',
                        url: 'ajax/ajax.function.php?funcName=mobile_exist',
                        data: function(validator) {
                            return {
                                mobile: validator.getFieldElements('mobile').val()
                            };
                        }
                    },
                notEmpty: {
                    message: 'Enter your mobile number'
                },
                stringLength: {
                  min: 10,
                  max: 10,
                  message: 'Mobile number must be 10 digit long'
                },
                regexp: {
                    regexp: /^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[789]\d{9}$/,
                    message: 'Number should start with (7-8-9)'
                },
            }
        },
        email: {
            validators: {
              notEmpty: {
                message: 'The email address is required'
              },
              emailAddress: {
                message: 'The input is not a valid email address'
              },
              regexp: {
              regexp:  /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i,
              message: 'Please enter correct email'
              },
            }
    },
    locality:{
        validators: {
          notEmpty: {
            message: 'The locality is required'
          }
    }
    },
    address: {
          validators: {
              notEmpty: {
                  message: 'Enter your address'
              }
          }
        }
    }
}).on('success.form.bv', function(e) { 
            return false;
});
$('#contact').bootstrapValidator({
    fields: {
        user:{
            validators: {
              notEmpty: {
                message: 'The User is required'
              }
            }
        },
        mobile: {
            validators: {
                remote: {
                        message: 'Mobile Number already exist',
                        url: 'ajax/ajax.function.php?funcName=mobile_exist',
                        data: function(validator) {
                            return {
                                mobile: validator.getFieldElements('mobile').val()
                            };
                        }
                    },
                notEmpty: {
                    message: 'Enter your mobile number'
                },
                stringLength: {
                  min: 10,
                  max: 10,
                  message: 'Mobile number must be 10 digit long'
                },
                regexp: {
                    regexp: /^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[789]\d{9}$/,
                    message: 'Number should start with (7-8-9)'
                },
            }
        },
        email: {
            validators: {
              notEmpty: {
                message: 'The email address is required'
              },
              emailAddress: {
                message: 'The input is not a valid email address'
              },
              regexp: {
              regexp:  /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i,
              message: 'Please enter correct email'
              },
            }
    },
    description: {
          validators: {
              notEmpty: {
                  message: 'Enter your address'
              }
          }
        }
    }
}).on('success.form.bv', function(e) { 
            return false;
});