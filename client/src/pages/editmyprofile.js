import React, { useState, useEffect } from "react";
import UserService from "../services/user.service";
import { useNavigate } from 'react-router-dom';
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
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
    const primaryButtonText = "Save Profile";
    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [lastLogin, setLastLogin] = useState("");
    const [createdOn, setCreatedOn] = useState("");
    const [description, setDescription] = useState("");
    /*   const [email, setEmail] = useState("");
      const [email, setEmail] = useState("");
      const [email, setEmail] = useState("");
      const [email, setEmail] = useState("");
      const [email, setEmail] = useState("");
      const [email, setEmail] = useState(""); */

    useEffect(() => {
        UserService.getUserProfile().then(
            (response) => {
                console.log(response.data.userObj);
                setUsername(response.data.userObj.username);
                setEmail(response.data.userObj.email);
                setLastLogin(response.data.userObj.last_login);
                setCreatedOn(response.data.userObj.create_time);
                setDescription(response.data.userObj.description);
            },
            (error) => {
                const _content =
                    (error.response &&
                        error.response.data &&
                        error.response.data.message) ||
                    error.message ||
                    error.toString();

                //setContent(_content);
                console.log(_content);

                /* if (error.response && error.response.status === 401) {
                    EventBus.dispatch("logout");
                } */
            }
        );
    }, []);

    const onChangeEmail = (e) => {
        const email = e.target.value;
        setEmail(email);
      };

    const handleEditProfile = (e) => {
        e.preventDefault();
        setLoading(true);

        UserService.setUserEmail(email).then(
            (data) => {
                console.log(data);
            },
            (error) => {
                const resMessage = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
                //setLoading(false);
                //setMessage(resMessage);
            }
        );
    };

    return (
        <Container>
            <Content>
                <MainContent>
                    <Heading>Profile</Heading>
                    <Form onSubmit={handleEditProfile} >
                        <div className="form-group">
                            <label htmlFor="username">Username</label>
                            <Input
                                type="text"
                                name="username"
                                value={username}
                                tw="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5 first:mt-0"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <Input
                                type="password"
                                name="password"
                                value={password}
                                tw="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5 first:mt-0"
                            />
                        </div>
                        
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <Input
                                type="text"
                                name="email"
                                value={email}
                                onChange={onChangeEmail}
                                validations={[required]}
                                tw="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5 first:mt-0"
                            />
                        </div>

                        <SubmitButton type="submit" invisible={loading}>
                            <SubmitButtonIcon className="icon" />)
                            <span className="text">Save changes</span>
                        </SubmitButton>
                    </Form>
                </MainContent>
            </Content>
        </Container>
    );
};

export default EditMyProfile;