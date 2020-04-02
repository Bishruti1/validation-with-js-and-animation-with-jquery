    // jquery animations

    $(document).ready(function(){
      $('.para').addClass('animated rollIn');
      $('.line-1').addClass('animated zoomInDown');
      $('#email').addClass('animated fadeInUp');
      $('.hero-mobile, .hero-desktop').addClass('animated zoomIn');
      $('#btn').addClass('animated heartBeat');
      
      
    })
    
    // javascript program for validation
    
    function setError(iconError, email, error){
        iconError.classList.add('active');
        email.classList.remove('success');
        email.classList.add('error');
  
        iconError.classList.remove('active');
        email.classList.remove('success');
        email.classList.add('error');
        error.classList.remove('success');
        
      }

      const validateForm = (form) => {
        let error = document.querySelector('.error');
        let iconError = document.querySelector('.icon-error');
        let email = form.querySelector('#email');
        

      const validateEmail = email => {
        let reg_exp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return reg_exp.test(String(email).toLowerCase());
        // here test will test weather email is in correct format or not
      }
      
  
        if(email.value == ''){
          error.innerHTML = 'Input field is empty';
          setError(iconError, email, error);
        } else if(!validateEmail(email.value)){
          error.innerHTML = 'Email address is not formatted correctly';
          setError(iconError, email, error);
        }else{
          iconError.classList.remove('active');
          
          email.classList.remove('error');
          alert("Email id submited")
        }
      }
  
      const form = document.getElementById('form');
      form.addEventListener('submit', e => {
        e.preventDefault();
        validateForm(form);
      });