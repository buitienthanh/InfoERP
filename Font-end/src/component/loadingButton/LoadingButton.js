
import React, { useEffect, useState } from 'react';
import { Button,Container,Row,Col } from 'react-bootstrap';

export default function LoadingButton(props) {

    const [isLoading, setLoading] = useState(false);
  
    function simulateNetworkRequest() {
        return new Promise((resolve) => setTimeout(resolve, 3000));
    }

    useEffect(() => {
      if (isLoading) {
        simulateNetworkRequest().then(() => {
          setLoading(false);
        });
      }
    }, [isLoading]);

    const handleClick = () => {
      props.onSave();
      
      setLoading(true);
    };

    return (
      <Button
      // variant="primary"
        disabled={isLoading}
        onClick={!isLoading ? handleClick : null}
        id='btnRegister' className='registerButton' 
        style={{ borderColor: "#debc65",
          backgroundColor: "#debc65",
          borderRadius: "16px"}}
      >
        {isLoading ? 
        <div className='btnLayout'>
            <label className='registerLabel'>Đang xử lý</label>
        </div>
        : 
        <div className='btnLayout'>
          <label className='registerLabel'>Đăng ký</label>
        </div>
        }
      </Button>
    );
  }