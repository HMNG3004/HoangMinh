import {
  Page,
  Text,
  View,
  Document,
  Font,
  StyleSheet,
  Link,
} from "@react-pdf/renderer";
import { createTw } from "react-pdf-tailwind";
import FontAwesomeIcon from "../../component/FontAwsomeIcon";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faHome, faPhone } from "@fortawesome/free-solid-svg-icons";

// Register Fonts
Font.register({
  family: "Tinos",
  fonts: [
    { src: "/fonts/Tinos-Regular.ttf" },
    { src: "/fonts/Tinos-Bold.ttf", fontWeight: "bold" },
    { src: "/fonts/Tinos-Italic.ttf", fontStyle: "italic" },
    {
      src: "/fonts/Tinos-BoldItalic.ttf",
      fontWeight: "bold",
      fontStyle: "italic",
    },
  ],
});

// Tailwind Setup (Optional, for Tailwind-like classes)
const tw = createTw({
  theme: {
    extend: {
      colors: {},
    },
  },
});

// Styles for the PDF
const styles = StyleSheet.create({
  page: {
    fontFamily: "Tinos",
    paddingHorizontal: 30,
    fontSize: 12,
    lineHeight: 1.5,
    backgroundColor: "#f9f9f9",
  },
  section: {
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  skillsWrapper: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
  },
});

const socials = [
  {
    name: "HMNG3004",
    link: "https://github.com/HMNG3004",
    icon: faGithub, // Placeholder for GitHub icon
  },
  {
    name: "Hoang Minh Ng",
    link: "https://www.linkedin.com/in/hmng3004/",
    icon: faLinkedin, // Placeholder for LinkedIn icon
  },
  {
    name: "hoangminhng.social",
    link: "https://www.facebook.com/HMNG3004/",
    icon: faHome, // Placeholder for Facebook icon
  },
];

const phoneNumber = {
  number: "+84 909 601 346",
  icon: faPhone,
};

const workExperiences = [
  {
    projectName: "Mechanical Machinery Rental Management System",
    role: "Software Developer (Front-End)",
    period: "09/2024 - Present",
    description: "Developed the front-end of the application using React.",
    achievements: [
      "Integrated real-time data updates for rental availability and status.",
      "Collaborated closely with the back-end team to ensure smooth API integration.",
      "Ensured cross-browser compatibility and mobile responsiveness for all features.",
    ],
  },
  {
    projectName: "Hostel Rental Platform",
    role: "Software Developer (Full-Stack)",
    period: "05/2024 - 08/2024",
    description:
      "Developed both front-end and back-end functionalities for the hostel rental platform.",
    achievements: [
      "Implemented real-time communication features for tenant and hostel owner interaction.",
      "Integrated a secure and reliable payment gateway for processing tenant bookings and payments.",
      "Developed features for tenant management, booking, and payment tracking.",
    ],
  },
  {
    projectName: "Real Estate Auction Platform",
    role: "Software Developer (Full-Stack)",
    period: "01/2024 - 04/2024",
    description:
      "Developed both front-end and back-end functionalities for the real estate auction platform.",
    achievements: [
      "Integrated real-time bidding functionality, allowing users to place bids and receive instant updates.",
      "Implemented secure user authentication and bid tracking features to ensure the integrity of the auction process.",
    ],
  },
  {
    projectName: "FPT Software Internship Program",
    role: "Software Developer Intern",
    period: "01/2024 - 04/2024",
    description:
      "Contributed to both front-end development and data-related tasks during the internship at FPT Software.",
    achievements: [
      "Collaborated with the team to resolve database errors, ensuring data integrity and accuracy.",
      "Gained hands-on experience in Data Science, learning key concepts and applying them to real-world problems.",
      "Developed the front-end of internal applications using Angular, improving user interfaces and enhancing user experience.",
    ],
  },
];

const skills = {
  programmingLanguages: ["Java", "C#", "TypeScript", "JavaScript"],
  libraries: ["ASP.NET", "React", "Angular"],
  databases: ["SQL Server", "PostgreSQL", "MongoDB"],
  otherTechnologies: ["Azure", "Docker"],
};

const ContractPDFFormat = () => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Header Section */}
        <View style={tw("flex flex-row justify-between mb-4")}>
          <View style={tw("flex flex-col items-start")}>
            {/* Name */}
            <Text style={tw("text-2xl leading-7 font-bold text-[#2c3e50]")}>
              Nguyen Van Hoang Minh
            </Text>
            <Text style={tw("text-xl font-semibold text-[#2c3e50]")}>
              Fullstack developer
            </Text>
            <Text style={tw("text-base font-semibold text-[#2c3e50]")}>
              Thu duc, Ho Chi Minh City |{" "}
              <FontAwesomeIcon
                faIcon={phoneNumber.icon}
                style={{
                  color: "#2c3e50",
                  width: "16px",
                  height: "16px",
                  marginRight: "5px",
                }}
              />{" "}
              {phoneNumber.number} |{" "}
              <Link
                src="mailto:ngminh3004@gmail.com"
                style={tw("flex flex-row items-center justify-center mx-3")}
              >
                <FontAwesomeIcon
                  faIcon={faEnvelope}
                  style={{
                    color: "#2c3e50",
                    width: "16px",
                    height: "16px",
                    marginRight: "5px",
                  }}
                />{" "}
                <Text style={tw("text-base text-[#2c3e50]")}>
                  ngminh3004@gmail.com
                </Text>
              </Link>
            </Text>

            {/* Contact Information */}
            <View style={tw("flex flex-row justify-center items-center gap-5")}>
              {socials.map((social, index) => (
                <Link
                  src={social.link}
                  key={index}
                  style={tw("flex flex-row items-center justify-center")}
                >
                  <FontAwesomeIcon
                    faIcon={social.icon}
                    style={{
                      color: "#2c3e50",
                      width: "16px",
                      height: "16px",
                      marginRight: "5px",
                    }}
                  />
                  <Text style={tw("text-base text-[#2c3e50]")}>
                    {social.name}
                  </Text>
                </Link>
              ))}
            </View>
          </View>
        </View>

        {/* Experience Section */}
        <View style={styles.section}>
          <Text
            style={tw(
              "text-xl font-semibold text-[#2c3e50] w-full mb-3 leading-5 border-b-2 border-[#cccccc]"
            )}
          >
            Work Experience
          </Text>

          {workExperiences.map((experience, index) => (
            <View
              key={index}
              style={tw("mb-6 w-full flex flex-col items-start")}
            >
              {/* Project Name and Period */}
              <View
                style={tw("flex flex-row w-full items-center justify-between")}
              >
                <Text style={tw("text-[#7f8c8d] font-semibold text-lg")}>
                  {experience.projectName}
                </Text>
                <Text style={tw("text-[#7f8c8d] font-semibold text-lg")}>
                  {experience.period}
                </Text>
              </View>

              {/* Role */}
              <Text style={tw("text-[#34495e] font-semibold")}>
                {experience.role}
              </Text>

              {/* Description */}
              {experience.description && (
                <Text style={tw("text-[#2c3e50] font-normal mb-2")}>
                  {experience.description}
                </Text>
              )}

              {/* Achievements (if any) */}
              {experience.achievements &&
                experience.achievements.length > 0 && (
                  <View style={tw("pl-4")}>
                    {experience.achievements.map((achievement, idx) => (
                      <Text key={idx} style={tw("text-[#2c3e50] text-sm")}>
                        - {achievement}
                      </Text>
                    ))}
                  </View>
                )}
            </View>
          ))}
        </View>

        {/* Education Section */}
        <View style={styles.section}>
          <Text
            style={tw(
              "text-xl font-semibold text-[#2c3e50] w-full mb-3 leading-5 border-b-2 border-[#cccccc]"
            )}
          >
            Education
          </Text>

          <View
            style={tw("flex flex-row w-full justify-between items-center mb-6")}
          >
            <View style={tw("flex flex-col items-start")}>
              <Text>FPT University</Text>
              <Text>Bachelor of Software Engineering </Text>
            </View>
            <View style={tw("flex flex-col items-start")}>
              <Text>Aug. 2021 – 2024 (expected)</Text>
              <Text>Ho Chi Minh City, Vietnam</Text>
            </View>
          </View>
        </View>

        {/* Skills Section */}
        <View style={styles.section}>
          <Text
            style={tw(
              "text-xl font-semibold text-[#2c3e50] w-full mb-3 leading-5 border-b-2 border-[#cccccc]"
            )}
          >
            Skills
          </Text>
          {/* Programming Languages */}
          <View style={styles.skillsWrapper}>
            <Text style={tw("font-semibold text-[#34495e] mr-3")}>
              Programming Languages
            </Text>
            {skills.programmingLanguages.map((language, index) => (
              <Text key={index} style={tw("mr-3")}>
                {language}
              </Text>
            ))}
          </View>

          {/* Libraries / Frameworks */}
          <View style={styles.skillsWrapper}>
            <Text style={tw("font-semibold text-[#34495e] mr-3")}>
              Libraries / Frameworks
            </Text>
            {skills.libraries.map((library, index) => (
              <Text key={index} style={tw("mr-3")}>
                {library}
              </Text>
            ))}
          </View>

          {/* Databases */}
          <View style={styles.skillsWrapper}>
            <Text style={tw("font-semibold text-[#34495e] mr-3")}>
              Databases
            </Text>
            {skills.databases.map((database, index) => (
              <Text key={index} style={tw("mr-3")}>
                {database}
              </Text>
            ))}
          </View>

          {/* Other Technologies */}
          <View style={styles.skillsWrapper}>
            <Text style={tw("font-semibold text-[#34495e] mr-3")}>
              Other Technologies
            </Text>
            {skills.otherTechnologies.map((tech, index) => (
              <Text key={index} style={tw("mr-3")}>
                {tech}
              </Text>
            ))}
          </View>
        </View>

        {/* Footer Section */}
        <View style={tw("flex flex-row items-center justify-center")}>
          <Text>© 2024 Hoang Minh | All Rights Reserved</Text>
        </View>
      </Page>
    </Document>
  );
};

export default ContractPDFFormat;
