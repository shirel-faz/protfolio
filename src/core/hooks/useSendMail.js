import { useEffect, useState } from 'react';

import { sedEmail } from '../utils/email-js/email-js';

const useSendMail = (emailTemplateObject) => {
 

    const defaultTemplateParams = {
    
        date : new Date().toLocaleString('he-IL', {
            timeZone: 'Asia/Jerusalem',
            dateStyle: 'full',
            timeStyle: 'short',
        }),
    };


    const sendExecute = (OptionalParams ) => {

        const { newTemplateParams = {}, sendJustOneTime = false} = OptionalParams;
        
        if(sendJustOneTime){
            const isEmailSent = localStorage.getItem(`${emailTemplateObject.template}_${emailTemplateObject.id}`);
            if(isEmailSent){
                return
            }
            localStorage.setItem(`${emailTemplateObject.template}_${emailTemplateObject.id}`, 'Sent');
        }
        sedEmail( {...defaultTemplateParams, ...newTemplateParams} , emailTemplateObject.template)
    }

    return { sendExecute }
};

export default useSendMail;
