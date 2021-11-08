function notify(setup){
    
    if(typeof(setup)=='string'){
        setup = {
            msg: setup,
            type: 'normal'
        };
    }
    
    let notification = (setup.msg) ? setup.msg.toString():'Nofitification!';
    let autoHide = setup.autoClose || true;
    let type = (setup.type) ? setup.type.toString():'normal';

    let notificationBox = document.createElement('div');
    notificationBox.setAttribute('id', 'nhr-notificaton');

    let hide_btn = document.createElement('button');
    hide_btn.setAttribute('id', 'hide-btn');
    hide_btn.innerText = 'X';

    let msg_box = document.createElement('div');
    msg_box.setAttribute('id', 'msg');
    msg_box.innerText = notification;


    notificationBox.appendChild(hide_btn);
    notificationBox.appendChild(msg_box);

    let notificationBox_style = {
        position: 'fixed',
        top: '10px',
        left: '10px',
        'transform-origin': 'top left',
        transform: 'scale(0.5)',
        opacity: 0,
        visibility: 'hidden',
        background: '#fff',
        padding: '10px',
        'border-radius': '10px',
        'box-shadow': '0 0 10px 5px rgba(0, 0, 0, 0.1)',
        display: 'inline-flex',
        'flex-direction': 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: 'auto',
        height: 'auto',
        transition: '0.2s',
        zIndex: 9999999,
        maxWidth: 'calc(100% - 20px)',
        fontFamily: 'Sans'
    };

    let notificationBox_notify = {
        transform: 'scale(1)',
        opacity: 1,
        visibility: 'visible'
    };

    let hide_btn_style = {
        border: '2px solid rgba(224, 75, 75, 0.9)',
        outline: 'none',
        marginBottom: '10px',
        displa: 'inline-flex',
        alignSelf: 'flex-start',
        background: 'transparent',
        padding: '0',
        fontSize: '12px',
        fontWeight: 'bolder',
        color: 'rgba(224, 75, 75, 0.9)',
        width: '20px',
        height: '20px',
        borderRadius: '50%',
        margin: '0 10px 0 0',
        transition: '0.2s',
        cursor: 'pointer'
    };

    let notificationBox_msg = {
        fontWeight: "520",
        fontSize: "14px",
        fontFamily: "inherit",
        color: "#333",
        margin: "0",
        padding: "0"
    };

    function add_style(elm, css_obj){
        if(elm){
            for(k in css_obj){
                elm.style[k] = css_obj[k];
            }
        }
    }

    add_style(notificationBox, notificationBox_style);
    add_style(hide_btn, hide_btn_style);
    add_style(msg_box, notificationBox_msg);
    
    hide_btn.addEventListener('click', (evt)=>{
        let notif = evt.target.parentElement;
        add_style(notif, {
            transform: 'scale(0.8)',
            visibility: 'hidden',
            opacity: '0'
        });

        setTimeout(()=>{
            notif.parentElement.removeChild(notif);
        }, 200);
    });
    
    
    
    // if(type=='warning'){text.style.color = 'firebrick';}
    // else if(type=='success'){text.style.color = 'rgb(25, 130, 57)';}
    // else{text.style.color = '#333'}
    
    // text.innerText = msg;
    // popupMsg.classList.add('alert');
    
    if(autoHide==true){
        setTimeout(()=>{
            
            add_style(notificationBox, {
                transform: 'scale(0.8)',
                visibility: 'hidden',
                opacity: '0'
            });

            setTimeout(()=>{
                notificationBox.parentElement.removeChild(notificationBox);
            }, 200);

        }, 2000);
    }
            
            
    document.body.appendChild(notificationBox);
    setTimeout(()=>{
        add_style(notificationBox, notificationBox_notify);
    }, 200);
            
}
        
        