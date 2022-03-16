import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import './MainPage.css'
import { useTranslation } from 'react-i18next';
import ButtonModal from '../../component/buttonModal/ButtonModal';
import Carousel from 'react-bootstrap/Carousel'

export default function MainPage(props) {
    const { t, } = useTranslation();
    return (
        <div id='divMain' className='mainPage'>
            <Container id='containerMain'>
                <div id='imgBack' alt='' />
                <Carousel variant="dark" style={{position:'relative',height:'683px'}} fade={false}>
                    <Carousel.Item interval={4000}>
                        <div style={{marginTop:'9%'}}>
                            <div style={{color:'white',fontWeight:'500',textAlign:'center',fontSize:'25px'}}>PHẦN MỀM KẾ TOÁN CÔNG NGHỆ AI - NHANH CHÓNG - TIẾT KIỆM</div>
                            <div style={{color:'white',fontWeight:'500',textAlign:'center',fontSize:'50px'}}>InfoERP</div>
                            <Row>
                                <Col lg={3} sm={12}>
                               
                                </Col>
                                <Col lg={3} sm={12}>
                                <div style={{color:'white',fontWeight:'500',fontSize:'20px',marginTop:'30px'}}>Quý doanh nghiệp đang tìm kiếm một giải pháp hỗ trợ công việc kế toán một cách hiệu quả? Việc quản lý sổ sách, tài liệu kế toán trở nên khó khăn khi Covid ập đến vì không thể đến công ty??</div>
                                <div style={{color:'white',fontSize:'18px',marginTop:'30px'}}>Hãy đến với phần mềm InfoERP kế toán, ngoài việc có thể cung cấp các chức năng quản lý kế toán đồng thời còn giúp Doanh nghiệp giải quyết được nghiệp vụ về Tài chính.</div>
                                </Col>
                                <Col lg={3} sm={12}>
                                    <img 
                                    style={{position:'absolute',left:'-100px',bottom:'2px',width:'150%'}}
                                     src="https://static.wixstatic.com/media/925c60_60e7238dd7fd4630a298c1f97ffdc8d8~mv2.png/v1/fill/w_669,h_370,al_c,usm_0.66_1.00_0.01,enc_auto/Banner-02.png" alt="Second slide" />
                                </Col>
                                <Col lg={3} sm={12}>
                                
                                </Col>
                            </Row>
                          
                        </div>
                    </Carousel.Item>
                    <Carousel.Item interval={4000}>
                        <div style={{marginTop:'9%'}}>
                        <Row>
                            <Col lg={3} sm={12}>
                            
                            </Col>
                            <Col lg={3} sm={12}>
                            <div style={{color:'white',fontWeight:'500',fontSize:'25px'}}>Trong thời đại dịch Covid 19, </div>
                             <div style={{color:'white',fontWeight:'500',fontSize:'25px'}}>việc xử lý nghiệp vụ kế toán gián tiếp sẽ trở nên hiệu quả hơn.  </div>
                            <div style={{color:'white',fontWeight:'500',fontSize:'25px'}}>Có InfoERP mọi việc đều DỄ DÀNG. </div>
                            <ul style={{marginTop:'85px'}}>
                                <li style={{color:'white',fontSize:'20px'}}>
                                    <span style={{fontWeight:'500'}}>Nghiệp vụ Kế toán</span> <span>khó?</span>
                                </li>
                                <li style={{color:'white',fontSize:'20px'}}>
                                    <span style={{fontWeight:'500'}}>Quản lý chứng từ</span> <span>thật phiền phức?</span>
                                </li>
                                <li style={{color:'white',fontSize:'20px'}}>
                                    <span style={{fontWeight:'500'}}>Khai báo Thuế</span>  <span>quá rắc rối?</span>
                                </li>
                                <li style={{color:'white',fontSize:'20px'}}>​
                                    <span style={{fontWeight:'500'}}>Quản lý các khoản phải thu</span> <span>phức tạp?</span>
                                </li>
                            </ul>
                            <div style={{color:'white',fontWeight:'500',fontSize:'20px'}}>Với INFOERP mọi thứ đều trở nên dễ dàng</div>
                            </Col>
                            <Col lg={3} sm={12}>
                                 <img 
                                 style={{position: 'absolute',width:'141%',left:'-65px'}}
                                  src="https://static.wixstatic.com/media/925c60_1aeea47a2208481ebf3f4d39788370a9~mv2.png/v1/fill/w_562,h_350,al_c,usm_0.66_1.00_0.01,enc_auto/Banner-04.png" alt="Second slide" />
                            </Col>
                            <Col lg={3} sm={12}>
                            
                            </Col>
                        </Row>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item interval={4000}>
                        <div style={{marginTop:'9%'}}>
                        <Row>
                            <Col lg={3} sm={12}>
                            
                            </Col>
                            <Col lg={3} sm={12}>
                                <div style={{color:'white',fontSize:'25px',fontWeight:'500'}}>Sử dụng trí tuệ nhân tạo (AI) vào </div>
                                <div style={{color:'white',fontSize:'25px',fontWeight:'500'}}> chương trình Kế toán. </div>
                                <div style={{color:'white',fontSize:'25px',fontWeight:'500'}}>Là điều bạn đã từng nghĩ đến? </div>
                                <div style={{color:'white',fontSize:'20px',marginTop:'40px'}}>
                                Ngoài việc quản lý các nghiệp vụ bắt buộc trong quản lý doanh nghiệp như Kế toán. Quản lý nhân sự như Mua hàng. Quản lý Kho, Giá thành và Khai thuế.
                                </div>
                                <div style={{color:'white',fontSize:'20px'}}>
                                Đây là một chương trình kế toán thông minh có thể tự động xử lý toàn bộ quy trình thu nhập thông tin và giao dịch Doanh nghiệp, nhập các bút toán và ngay cả việc kiểm tra các sai sót quản lý Thuế/Kế toán
                                </div>
                            </Col>
                            <Col lg={3} sm={12}>
                                 <img
                                  style={{position:'absolute',width:'150%',left:'-95px'}}
                                  src="https://static.wixstatic.com/media/925c60_652ca591e1da45918afa1cf425447c2b~mv2.png/v1/fill/w_651,h_410,al_c,usm_0.66_1.00_0.01,enc_auto/Banner-03.png" alt="Second slide" />
                            </Col>
                            <Col lg={3} sm={12}>
                            
                            </Col>
                        </Row>
                        </div>
                    </Carousel.Item>

                    {/* <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="https://static.wixstatic.com/media/925c60_1aeea47a2208481ebf3f4d39788370a9~mv2.png/v1/fill/w_562,h_350,al_c,usm_0.66_1.00_0.01,enc_auto/Banner-04.png"
                        alt="Second slide"
                        width="200px"
                        />
                        <Carousel.Caption>
                        <h5>Second slide label</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="https://static.wixstatic.com/media/925c60_652ca591e1da45918afa1cf425447c2b~mv2.png/v1/fill/w_651,h_410,al_c,usm_0.66_1.00_0.01,enc_auto/Banner-03.png"
                        alt="Third slide"
                        width="200px"
                        />
                        <Carousel.Caption>
                        <h5>Third slide label</h5>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item> */}
                </Carousel>
                {/* <Row id='rowTitleLabel'>
                    <Col lg={5} sm={12} id='colTitleLabel'>
                        <div>
                            <h1>
                                <div>
                                    <label className='titleLabel titleAbove' >
                                        {t('mainPage.touch')}
                                    </label>
                                </div>
                                <div>
                                    <label className='titleLabel titleBelow'>
                                        {t('mainPage.lifeUtil')}
                                    </label>
                                </div>
                            </h1>
                        </div>
                        <div id='line' />
                        <label id='detailLabel'>
                            {t('mainPage.solution')}
                        </label>
                        <div>
                            <ButtonModal name={'mainPage.registerBtn'} id={'buttonMainPage'} />
                        </div>
                    </Col>
                    <Col id='imageCol'>
                        <div style={{display: 'flex'}}>
                            <div id='divImageMain'/>
                        </div>
                    </Col>
                </Row> */}
            </Container>
        </div>
    )
}