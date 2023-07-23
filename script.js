const scriptURL = 'https://script.google.com/macros/s/AKfycbxf2bvfftzzJEqK1x3GgGJtt4ircRGLAYX3IXiiwxF8v_uVZukbpQuR7tACczcf7EVq8w/exec'
      const form = document.forms['submit-to-google-sheet']
    
      form.addEventListener('submit', e => {
        e.preventDefault()
        fetch(scriptURL, { method: 'POST', body: new FormData(form)})
          .then(response => console.log('Success!', response))
          .catch(error => console.error('Error!', error.message))
      })