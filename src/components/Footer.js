import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedinIn, FaMagento, FaTwitter, FaYoutube } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Button } from '../globalStyles'

const Footer = () => {
    return (
        <FooterContainer>
            <FooterSubscription>
                <FooterSubHeading>
                    Join our exclusive membership to recieve the latest news and trends
                </FooterSubHeading>
                <FooterSubText>
                    You can unsubscribe at any time.
                </FooterSubText>
                <Form>
                    <FormInput name='email' type='email' placeholder='Your Email' />
                        <Button fontBig>Subscribe</Button>
                    
                </Form>
            </FooterSubscription>
            <FooterLinksContainer>
                <FooterLinksWrapper>
                    <FooterLinksItems>
                        <FooterLinkTitle>About Us</FooterLinkTitle>
                        <FooterLink to='/sign-up'>How it works</FooterLink>
                        <FooterLink to='/'>Testimonials</FooterLink>
                        <FooterLink to='/'>Careers</FooterLink>
                        <FooterLink to='/'>Investors</FooterLink>
                        <FooterLink to='/'>Terms of Service</FooterLink>

                    </FooterLinksItems>
                    <FooterLinksItems>
                        <FooterLinkTitle>Contact Us</FooterLinkTitle>
                        <FooterLink to='/sign-up'>How it works</FooterLink>
                        <FooterLink to='/'>Testimonials</FooterLink>
                        <FooterLink to='/'>Careers</FooterLink>
                        <FooterLink to='/'>Investors</FooterLink>
                        <FooterLink to='/'>Terms of Service</FooterLink>

                    </FooterLinksItems>
                </FooterLinksWrapper>
                <FooterLinksWrapper>
                    <FooterLinksItems>
                        <FooterLinkTitle>Videos</FooterLinkTitle>
                        <FooterLink to='/sign-up'>How it works</FooterLink>
                        <FooterLink to='/'>Testimonials</FooterLink>
                        <FooterLink to='/'>Careers</FooterLink>
                        <FooterLink to='/'>Investors</FooterLink>
                        <FooterLink to='/'>Terms of Service</FooterLink>

                    </FooterLinksItems>
                    <FooterLinksItems>
                        <FooterLinkTitle>Social Media</FooterLinkTitle>
                        <FooterLink to='/sign-up'>How it works</FooterLink>
                        <FooterLink to='/'>Testimonials</FooterLink>
                        <FooterLink to='/'>Careers</FooterLink>
                        <FooterLink to='/'>Investors</FooterLink>
                        <FooterLink to='/'>Terms of Service</FooterLink>

                    </FooterLinksItems>
                </FooterLinksWrapper>
            </FooterLinksContainer>
            <SocialMedia>
                <SocialMediaWrap>
                <SocialLogo to='/'>
                <SocialIcon />
                PLUS ULTRA
                </SocialLogo>
                <WebsiteRights>PLUS ULTRA 2021</WebsiteRights>
                <SocialIcons>
                    <SocialIconLink href='/' target="_blank" arial-label="Facebook">
                        <FaFacebook />
                    </SocialIconLink>
                    <SocialIconLink href='/' target="_blank" arial-label="Instagram">
                        <FaInstagram />
                    </SocialIconLink>
                    <SocialIconLink href='/' target="_blank" arial-label="Youtube">
                        <FaYoutube />
                    </SocialIconLink>
                    <SocialIconLink href='/' target="_blank" arial-label="Twitter">
                        <FaTwitter />
                    </SocialIconLink>
                    <SocialIconLink href='/' target="_blank" arial-label="LinkedIn">
                        <FaLinkedinIn />
                    </SocialIconLink>
                </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>
        </FooterContainer>
    )
}

const FooterContainer = styled.div`
background-color: #101522;
padding: 4rem 0 2rem 0;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;

const FooterSubscription = styled.section`
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-align: center;
margin-bottom: 24px;
padding: 24px;
color: #fff;
`;

const FooterSubHeading = styled.p`
font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, Helvetica, sans-serif, sans-serif;
margin-bottom: 24px;
font-size: 24px;
`;

const FooterSubText = styled.p`
margin-bottom: 24px;
font-size: 20px;
`;

const Form = styled.form`
display: flex;
justify-content: center;
align-items: center;

@media screen and (max-width: 820px){
    flex-direction: column;
    width: 80%;
}
`;

const FormInput = styled.input`
padding: 10px 20px;
border-radius: 2px;
margin-right: 10px;
outline: none;
border: none;
font-size: 16px;
border: 1px solid #fff;

&::placeholder{
    color: #242424;
}

@media screen and (max-width: 820px) {
    width: 100%;
    margin: 0 0 16px 0;
}

`;

const FooterLinksContainer = styled.div`
width: 100%;
max-width: 1000px;
display: flex;
justify-content: center;

@media screen and (max-width: 820px){
    padding-top: 32px;
}
`;

const FooterLinksWrapper = styled.div`

display: flex;

@media screen and (max-width: 820px){
    flex-direction: column;
}
`;

const FooterLinksItems = styled.div`


display: flex;
flex-direction: column;
align-items: flex-start;
margin: 16px;
text-align: left;
width: 160px;
box-sizing: border-box;
color: #fff;

@media screen and (max-width: 420px){
    margin: 0;
    padding: 10px;
    width: 100%;
}
`;

const FooterLinkTitle = styled.h2`
margin-bottom: 16px;

`;

const FooterLink = styled(Link)`
color: #fff;
text-decoration: none;
margin-bottom: 0.5rem;

&:hover{
    color: #0467fb;
    transition: 0.3s ease-out;
}
`;

const SocialMedia = styled.section`
max-width: 1000px;
width: 100%;
`;

const SocialMediaWrap = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 90%;
max-width: 1000px;
margin: 40px auto 0 auto;

@media screen and (max-width: 820px){
    flex-direction: column;
}
`;

const SocialLogo = styled(Link)`
color: #fff;
justify-self: start;
cursor: pointer;
text-decoration: none;
font-size: 2rem;
display: flex;
align-items: center;
margin-bottom: 16px;
`;

const SocialIcon = styled(FaMagento)`
margin-right: 10px;
`;

const WebsiteRights = styled.small`
color: #fff;
margin-bottom: 16px;
`;

const SocialIcons = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 240px;

`;

const SocialIconLink = styled.a`
color: #fff;
font-size: 24px;
`;

export default Footer
