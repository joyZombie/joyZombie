import React, { useState, useEffect } from "react";
import UserService from "../services/user.service";
//import EventBus from "../common/EventBus";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import { ReactComponent as EmailIcon } from "feather-icons/dist/icons/mail.svg";
import { ReactComponent as UserIcon } from "feather-icons/dist/icons/user-plus.svg";
import { ReactComponent as LoginIcon } from "feather-icons/dist/icons/log-in.svg";
import { ReactComponent as GenderIcon } from "feather-icons/dist/icons/user.svg";
import { ReactComponent as ExperienceIcon } from "feather-icons/dist/icons/book-open.svg";
import { ReactComponent as RatingIcon } from "feather-icons/dist/icons/star.svg";
import { ReactComponent as EditIcon } from "feather-icons/dist/icons/edit.svg";
import TeamIllustrationSrc from "images/team-illustration-2.svg";

const Container = tw.div`relative`;
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

const FeatureText = tw.div`mt-4 md:mt-0 md:ml-4 text-center md:text-left`;
const FeatureHeading = tw.div`font-bold text-lg text-primary-500`;
const FeatureDescription = tw.div`mt-1 text-sm`;

const PrimaryButton = tw(PrimaryButtonBase)`mt-8 md:mt-10 text-sm inline-block mx-auto md:mx-0`;

const MyProfile = () => {
  const primaryButtonText = "Edit Profile";
  const primaryButtonUrl = "/editmyprofile";
  const features = null;
  const textOnLeft = false;

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [lastLogin, setLastLogin] = useState("");
  const [createdOn, setCreatedOn] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [picture, setPicture] = useState("");
  const [resume, setResume] = useState("");
  const [gender, setGender] = useState("");
  const [exp_company, setExpCompany] = useState("");
  const [exp_total, setExpTotal] = useState("");
  const [rating, setRating] = useState("");

    useEffect(() => {
        UserService.getUserProfile().then(
            (response) => {
                //console.log(response.data.userObj);
                setUsername(response.data.userObj.username);
                setEmail(response.data.userObj.email);
                setLastLogin(response.data.userObj.last_login);
                setCreatedOn(response.data.userObj.create_time);
                setName(response.data.userObj.name);
                setDescription(response.data.userObj.description);
                setPicture(response.data.userObj.picture);
                setResume(response.data.userObj.resume);
                setGender(response.data.userObj.gender);
                setExpCompany(response.data.userObj.exp_company);
                setExpTotal(response.data.userObj.exp_total);
                setRating(response.data.userObj.rating);
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

    return (
      <Container>
        <TwoColumn>
          <ImageColumn>
            <Image imageSrc={{picture}?{picture}:{TeamIllustrationSrc}} />
          </ImageColumn>
          <TextColumn textOnLeft={textOnLeft}>
            <TextContent>
              <Subheading>Your Profile</Subheading>
              <Heading>Hello <span tw="text-primary-500">{username}</span>. Here is your professional summary:</Heading>
              <Description>{description}</Description>
              <Features>
                  <Feature>
                    <FeatureIconContainer>{<UserIcon />}</FeatureIconContainer>
                    <FeatureText>
                      <FeatureHeading>Name:</FeatureHeading>
                      <FeatureDescription>{name}</FeatureDescription>
                    </FeatureText>
                  </Feature>
                  <Feature>
                    <FeatureIconContainer>{<EmailIcon />}</FeatureIconContainer>
                    <FeatureText>
                      <FeatureHeading>Email:</FeatureHeading>
                      <FeatureDescription>{email}</FeatureDescription>
                    </FeatureText>
                  </Feature>
                  <Feature>
                    <FeatureIconContainer>{<UserIcon />}</FeatureIconContainer>
                    <FeatureText>
                      <FeatureHeading>User created on:</FeatureHeading>
                      <FeatureDescription>{createdOn}</FeatureDescription>
                    </FeatureText>
                  </Feature>
                  <Feature>
                    <FeatureIconContainer>{<LoginIcon />}</FeatureIconContainer>
                    <FeatureText>
                      <FeatureHeading>Last login:</FeatureHeading>
                      <FeatureDescription>{lastLogin}</FeatureDescription>
                    </FeatureText>
                  </Feature>
                  <Feature>
                    <FeatureIconContainer>{<GenderIcon />}</FeatureIconContainer>
                    <FeatureText>
                      <FeatureHeading>Gender:</FeatureHeading>
                      <FeatureDescription>{gender}</FeatureDescription>
                    </FeatureText>
                  </Feature>
                  <Feature>
                    <FeatureIconContainer>{<ExperienceIcon />}</FeatureIconContainer>
                    <FeatureText>
                      <FeatureHeading>Total experience in Incedo:</FeatureHeading>
                      <FeatureDescription>{exp_company}</FeatureDescription>
                    </FeatureText>
                  </Feature>
                  <Feature>
                    <FeatureIconContainer>{<ExperienceIcon />}</FeatureIconContainer>
                    <FeatureText>
                      <FeatureHeading>Total experience:</FeatureHeading>
                      <FeatureDescription>{exp_total}</FeatureDescription>
                    </FeatureText>
                  </Feature>
                  <Feature>
                    <FeatureIconContainer>{<RatingIcon />}</FeatureIconContainer>
                    <FeatureText>
                      <FeatureHeading>Rating:</FeatureHeading>
                      <FeatureDescription>{rating}</FeatureDescription>
                    </FeatureText>
                  </Feature>
              </Features>
              <PrimaryButton as="a" href={primaryButtonUrl} >
                <EditIcon />
                <span className="text" tw="ml-6">{primaryButtonText}</span>
              </PrimaryButton>
            </TextContent>
          </TextColumn>
        </TwoColumn>
      </Container>
    );
};

export default MyProfile;