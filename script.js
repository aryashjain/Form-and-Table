const form = document.getElementById('form');
const pipelineName = document.getElementById('pipelineName');
const projectName = document.getElementById('projectName');
const bucketName = document.getElementById('bucketName');
const cred = document.getElementById('cred');
const timer = document.getElementById('timer');
const file = document.getElementById('file');

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};



const validateInputs = () => {
    const pipelineNameValue = pipelineName.value.trim();
    const projectNameValue = projectName.value.trim();
    const bucketNameValue = bucketName.value.trim();
    const credValue = cred.value.trim();
    const timerValue = timer.value.trim();
    const fileValue = file.value.trim();
const format = /[!@#$%^&*()+\-=\[\]{};':"\\|,.<>\/?]+/;

    if(pipelineNameValue === '') {
        setError(pipelineName, 'name for the pipeline is required');
    } else if (pipelineNameValue.length < 5 ) {
        setError(pipelineName, 'pipelineName must be at least 8 character.')} 
        else if(pipelineNameValue[0]=='_'||pipelineNameValue[0]=='+'||pipelineNameValue[0]=='-')
        {
          setError (pipelineName,'please begin  with a character')
        }
       
        else if(format.test(pipelineNameValue))
        {
          setError (pipelineName,'no special characters allowed');
        }
        else {
        setSuccess(pipelineName);
    }
  
    if(projectNameValue === '') {
        setError(projectName, 'name for the project is required');
    } else if (projectNameValue.length < 5 ) {
        setError(projectName, 'project Name must be at least 5 character.')} 
        else if(projectNameValue[0]=='_'||projectNameValue[0]=='+'||projectNameValue[0]=='-')
        {
          setError (projectName,'please begin  with a character');
  
        }  
        else if(format.test(projectNameValue))
        {
          setError (projectName,'no special characters allowed');
        }
        else {
        
        setSuccess(projectName);
    }

    if(bucketNameValue === '') {
        setError(bucketName, 'name for the bucket is required');
    } else if (bucketNameValue.length < 5 ) {
        setError(bucketName, 'bucketName must be at least 5 character.') }
        else if(bucketNameValue[0]=='_'||bucketNameValue[0]=='+'||bucketNameValue[0]=='-')
        {
          setError (bucketName,'please begin  with a character')
        }

        else if(format.test(bucketNameValue))
        {
          setError (bucketName,'no special characters allowed');
        }
        else {
        setSuccess(bucketName);
    }
    if(credValue === '') {
        setError(cred, 'credentials required');
    }else if (credValue.length < 5 ) {
        setError(cred, 'cred must be at least 5 character.')
    } 
    else if(credValue[0]=='_'||credValue[0]=='+'||credValue[0]=='-')
        {
          setError (cred,'please begin  with a character');
  
        }
    else if(format.test(credValue))
    {
      setError (cred,'no special characters allowed');
    }
    else {
        setSuccess(cred);
    }
    
    if(timerValue === '') {
      setError(timer, 'run time required');
    } 
    else if(format.test(timerValue))
    {
      setError (timer,'no special characters allowed');}
    else {
        setSuccess(timer);
    }
    

  
};
