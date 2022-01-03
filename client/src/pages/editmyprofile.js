import React, { useState, useEffect, useRef } from "react";
import UserService from "../services/user.service";
import { useNavigate } from 'react-router-dom';
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
//import EventBus from "../common/EventBus";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import { ReactComponent as BriefcaseIcon } from "feather-icons/dist/icons/briefcase.svg";
import { ReactComponent as MoneyIcon } from "feather-icons/dist/icons/dollar-sign.svg";
import TeamIllustrationSrc from "images/team-illustration-2.svg";
import { ReactComponent as SubmitButtonIcon } from "feather-icons/dist/icons/save.svg";

const Container = tw.div`relative`;
const Content = tw.div`max-w-screen-xl m-0 sm:mx-20 sm:my-16 bg-white text-gray-900 shadow sm:rounded-lg flex justify-center flex-1`;
const MainContainer = tw.div`lg:w-1/2 xl:w-5/12 p-6 sm:p-12`;
const MainContent = tw.div`mt-12 flex flex-col items-center`;
const TwoColumn = tw.div`flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-20 md:py-24`;
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;
const ImageColumn = tw(Column)`md:w-5/12 flex-shrink-0 h-80 md:h-auto`;
const TextColumn = styled(Column)(props => [
  tw`md:w-7/12 mt-16 md:mt-0`,
  props.textOnLeft ? tw`md:mr-12 lg:mr-16 md:order-first` : tw`md:ml-12 lg:ml-16 md:order-last`
]);

const CardImage = styled.div`
  ${props => css`background-image: url("${props.imageSrc}");`}
  ${tw`w-64 h-64 bg-contain bg-center rounded`}`

const Image = styled.div(props => [
  `background-image: url("${props.imageSrc}");`,
  tw`md:ml-12 w-64 h-64 rounded bg-contain bg-no-repeat bg-center h-full`
]);
const TextContent = tw.div`lg:py-8 text-center md:text-left`;

const Subheading = tw(SubheadingBase)`text-center md:text-left`;
const Heading = tw(
  SectionHeading
)`mt-4 font-black text-left text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight`;
const Description = tw.p`mt-4 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100`;

const Features = tw.div`mt-8 max-w-sm mx-auto md:mx-0`;
const Feature = tw.div`mt-8 flex items-start flex-col md:flex-row`;

const FeatureIconContainer = styled.div`
  ${tw`mx-auto inline-block border border-primary-500 text-center rounded-full p-2 flex-shrink-0`}
  svg {
    ${tw`w-5 h-5 text-primary-500`}
  }
`;

const SubmitButton = styled.button`
  ${tw`mt-5 tracking-wide font-semibold bg-primary-500 text-gray-100 w-full py-4 rounded-lg hover:bg-primary-900 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none`}
  .icon {
    ${tw`w-6 h-6 -ml-2`}
  }
  .text {
    ${tw`ml-3`}
  }
`;

const FeatureText = tw.div`mt-4 md:mt-0 md:ml-4 text-center md:text-left`;
const FeatureHeading = tw.div`font-bold text-lg text-primary-500`;
const FeatureDescription = tw.div`mt-1 text-sm`;
const textTW = "w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5 first:mt-0";

const PrimaryButton = tw(PrimaryButtonBase)`mt-8 md:mt-10 text-sm inline-block mx-auto md:mx-0`;
const required = (value) => {
    if (!value) {
      return (
        <div className="alert alert-danger" role="alert">
          This field is required!
        </div>
      );
    }
  };


const EditMyProfile = () => {
    //const navigate = useNavigate();

    const form = useRef();
    const checkBtn = useRef();
    const [successful, setSuccessful] = useState(false);
    const [message, setMessage] = useState("");

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [picture, setPicture] = useState("");
    const [resume, setResume] = useState("");
    const [gender, setGender] = useState("");
    const [exp_company, setExpCompany] = useState("");
    const [exp_total, setExpTotal] = useState("");
    
    useEffect(() => {
        UserService.getUserProfile().then(
            (response) => {
                //console.log(response.data.userObj);
                setUsername(response.data.userObj.username);
                setPassword(response.data.userObj.password);
                setEmail(response.data.userObj.email);
                setName(response.data.userObj.name);
                setDescription(response.data.userObj.description);
                setPicture(response.data.userObj.picture);
                setResume(response.data.userObj.resume);
                setGender(response.data.userObj.gender);
                setExpCompany(response.data.userObj.exp_company);
                setExpTotal(response.data.userObj.exp_total);
            },
            (error) => {
                const resMessage = (error.response && error.response.data && error.response.data.message) ||
                    error.message || error.toString();
                setMessage(resMessage);
                setSuccessful(false);
                console.log(resMessage);

                /* if (error.response && error.response.status === 401) {
                    EventBus.dispatch("logout");
                } */
            }
        );
    }, []);

    const onChangeEmail         = (e) => { setEmail(e.target.value);        };
    const onChangePassword      = (e) => { setPassword(e.target.value);     };
    const onChangeName          = (e) => { setName(e.target.value);         };
    const onChangeDescription   = (e) => { setDescription(e.target.value);  };
    const onChangePicture       = (e) => { setPicture(e.target.value);      };
    const onChangeResume        = (e) => { setResume(e.target.value);       };
    const onChangeGender        = (e) => { setGender(e.target.value);       };
    const onChangeExpCompany    = (e) => { setExpCompany(e.target.value);   };
    const onChangeExpTotal      = (e) => { setExpTotal(e.target.value);     };

    const handleEditProfile = (e) => {
        e.preventDefault();
        setMessage("");
        setSuccessful(false);
        form.current.validateAll();

        if (checkBtn.current.context._errors.length === 0) {
            UserService.setUserEmail(email).then( (response) => { setMessage(response.data.message); setSuccessful(true); },
                (error) => {
                    const resMessage = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
                    setMessage(resMessage); setSuccessful(false);
                }
            );
            UserService.setUserPassword(password).then( (response) => { setMessage(response.data.message); setSuccessful(true); },
                (error) => {
                    const resMessage = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
                    setMessage(resMessage); setSuccessful(false);
                }
            );
            UserService.setUserName(name).then( (response) => { setMessage(response.data.message); setSuccessful(true); },
                (error) => {
                    const resMessage = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
                    setMessage(resMessage); setSuccessful(false);
                }
            );
            UserService.setUserDescription(description).then( (response) => { setMessage(response.data.message); setSuccessful(true); },
                (error) => {
                    const resMessage = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
                    setMessage(resMessage); setSuccessful(false);
                }
            );
            UserService.setUserGender(gender).then( (response) => { setMessage(response.data.message); setSuccessful(true); },
                (error) => {
                    const resMessage = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
                    setMessage(resMessage); setSuccessful(false);
                }
            );
            UserService.setUserExpCompany(exp_company).then( (response) => { setMessage(response.data.message); setSuccessful(true); },
                (error) => {
                    const resMessage = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
                    setMessage(resMessage); setSuccessful(false);
                }
            );
            UserService.setUserExpTotal(exp_total).then( (response) => { setMessage(response.data.message); setSuccessful(true); },
                (error) => {
                    const resMessage = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
                    setMessage(resMessage); setSuccessful(false);
                }
            );
        }
    };

    return (
        <Container>
            <Content>
                <MainContent>
                    <Heading>Profile</Heading>
                    <Form onSubmit={handleEditProfile} ref={form} >
                        {!successful && (
                            <div>
                                <label htmlFor="username">Username</label>
                                <Input type="text" name="username" value={username} tw="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5 first:mt-0" />

                                <label htmlFor="password">Password</label>
                                <Input type="password" name="password" value={password} onChange={onChangePassword} validations={[required]} tw="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5 first:mt-0" />

                                <label htmlFor="email">Email</label>
                                <Input type="text" name="email" value={email} onChange={onChangeEmail} validations={[required]} tw="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5 first:mt-0" />

                                <label htmlFor="name">Name</label>
                                <Input type="text" name="name" value={name} onChange={onChangeName} validations={[required]} tw="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5 first:mt-0" />

                                <label htmlFor="desc">Description</label>
                                <Input type="text" name="desc" value={description} onChange={onChangeDescription} validations={[required]} tw="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5 first:mt-0" />

                                <label htmlFor="gender">Gender</label>
                                <Input type="text" name="gender" value={gender} onChange={onChangeGender} validations={[required]} tw="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5 first:mt-0" />

                                <label htmlFor="expCompany">Experience in company</label>
                                <Input type="text" name="expCompany" value={exp_company} onChange={onChangeExpCompany} validations={[required]} tw="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5 first:mt-0" />

                                <label htmlFor="expTotal">Total Experience</label>
                                <Input type="text" name="expTotal" value={exp_total} onChange={onChangeExpTotal} validations={[required]} tw="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5 first:mt-0" />

                                <SubmitButton type="submit" >
                                    <SubmitButtonIcon className="icon" />
                                    <span className="text">Save changes</span>
                                </SubmitButton>
                            </div>
                        )}
                        {message && (
                            <div className="form-group">
                                <div
                                    className={
                                        successful ? "alert alert-success" : "alert alert-danger"
                                    }
                                    role="alert"
                                >
                                    {message}
                                </div>
                            </div>
                        )}
                        <CheckButton style={{ display: "none" }} ref={checkBtn} />
                    </Form>
                </MainContent>
            </Content>
        </Container>
    );
};

export default EditMyProfile;