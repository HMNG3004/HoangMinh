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
import { faHome, faPhone } from "@fortawesome/free-solid-svg-icons";

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
    paddingTop: 30,
  },
  section: {
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 15,
  },
  skillsWrapper: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
  },
});

const headerTailwindStyle = {
  name: "text-2xl leading-5 font-bold text-[#2c3e50]",
  jobTitle: "text-xl leading-5 font-semibold text-[#2c3e50]",
  contactInfo: "text-base font-semibold text-[#2c3e50]",
  socials: "flex flex-row justify-center items-center gap-5",
  socialLink: "flex flex-row items-center justify-center",
  socialText: "text-base text-[#2c3e50]",
};

const projectTailwindStyle = {
  sectionTitle:
    "text-xl font-semibold text-[#2c3e50] w-full leading-5 border-b-2 border-[#cccccc]",
  sectionBody: "w-full flex flex-col items-start gap-2",
  item: "w-full flex flex-col items-start",
  itemHeader: "flex flex-row w-full items-center justify-between",
  projectName: "text-[#7f8c8d] font-semibold text-xl leading-5",
  period: "text-[#7f8c8d] font-semibold",
  role: "text-[#34495e] font-semibold pl-3",
  description: "text-[#2c3e50] text-base",
};

const educationTailwindStyle = {
  sectionTitle:
    "text-xl font-semibold text-[#2c3e50] w-full leading-5 border-b-2 border-[#cccccc]",
  itemHeader: "flex flex-row w-full justify-between items-center",
  universityName: "text-[#7f8c8d] font-semibold text-xl leading-5",
  period: "text-[#7f8c8d] font-semibold",
  major: "text-[#34495e] font-semibold pl-3",
  location: "text-sm text-[#7f8c8d] italic font-semibold",
  course: "pl-3 text-base text-[#34495e]",
};

const skillsTailwindStyle = {
  sectionTitle:
    "text-xl font-semibold text-[#2c3e50] w-full leading-5 border-b-2 border-[#cccccc]",
  skillName: "font-semibold text-[#34495e] mr-2",
  technology: "mr-1 text-[#2c3e50] text-base",
};

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
    link: "https://www.hoangminhng.social/",
    icon: faHome, // Placeholder for Facebook icon
  },
];

const phoneNumber = {
  number: "+84 909 601 346",
  icon: faPhone,
};

const workExperiences = [
  {
    projectName: "FPT Software Internship Program",
    role: "Software Developer Intern",
    period: "09/2023 - 12/2023",
    description: [
      "Engaged in full-cycle software projects, contributing to both front-end design elements and critical back-end databases.",
      "Collaborated with the team to resolve database errors, ensuring data integrity and accuracy.",
      "Developed the front-end of internal applications using Angular, improving user interfaces and enhancing user experience.",
    ],
  },
];

const projects = [
  {
    projectName: "Mechanical Machinery Rental Management System",
    role: "Software Developer (Front-End) - ReactJs, React Native",
    period: "09/2024 - Present",
    description: [
      "Capstone project for the Bachelor's degree in Software Engineering.",
      "Engineer a robust system for managing mechanical equipment rentals, leading to a 15% increase in customer satisfaction scores as a result of improved communication and streamlined booking processes.",
    ],
  },
  {
    projectName: "Hostel Rental Platform",
    role: "Software Developer (Full-Stack) - ReactJs, ASP.NET Core",
    period: "05/2024 - 08/2024",
    description: [
      "Developed an innovative platform that streamlined the process of locating and managing student rental accommodations, resulting in a 30% reduction in time spent on property searches for over 1,000 students.",
    ],
  },
  {
    projectName: "Real Estate Auction Platform",
    role: "Software Developer (Full-Stack) - ReactJs, ASP.NET Core",
    period: "01/2024 - 04/2024",
    description: [
      "Developed a system to support the property auction experience, designed to manage up to 100 property listings and facilitate participation for a classroom-sized audience, simplifying the entire process for users.",
    ],
  },
];

const skills = {
  programmingLanguages: ["Java,", "C#,", "TypeScript,", "JavaScript"],
  libraries: ["ASP.NET,", "React,", "Angular"],
  databases: ["SQL Server,", "PostgreSQL,", "MongoDB"],
  othersk: ["Azure,", "Docker"],
};

const ContractPDFFormat = () => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Header Section */}
        <View style={tw("flex flex-row justify-between mb-4")}>
          <View style={tw("flex flex-col items-start")}>
            {/* Name */}
            <Text style={tw(headerTailwindStyle.name.toString())}>
              Nguyen Van Hoang Minh
            </Text>
            <Text style={tw(headerTailwindStyle.jobTitle.toString())}>
              .NET Developer
            </Text>
            <Text style={tw(headerTailwindStyle.contactInfo.toString())}>
              Thu Duc, Ho Chi Minh City |{" "}
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
                style={tw(headerTailwindStyle.socialLink.toString())}
              >
                <Text style={tw(headerTailwindStyle.socialText.toString())}>
                  ngminh3004@gmail.com
                </Text>
              </Link>
            </Text>

            {/* Contact Information */}
            <View
              style={tw(headerTailwindStyle.socialLink.toString() + " gap-5")}
            >
              {socials.map((social, index) => (
                <Link
                  src={social.link}
                  key={index}
                  style={tw(headerTailwindStyle.socialLink.toString())}
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
                  <Text style={tw(headerTailwindStyle.socialText.toString())}>
                    {social.name}
                  </Text>
                </Link>
              ))}
            </View>
          </View>
        </View>

        {/* Experience Section */}
        <View style={styles.section}>
          <Text style={tw(projectTailwindStyle.sectionTitle.toString())}>
            Work Experience
          </Text>
          <View style={tw(projectTailwindStyle.sectionBody.toString())}>
            {workExperiences.map((experience, index) => (
              <View
                key={index}
                style={tw(projectTailwindStyle.item.toString())}
              >
                {/* Experience Name and Period */}
                <View style={tw(projectTailwindStyle.itemHeader.toString())}>
                  <Text style={tw(projectTailwindStyle.projectName.toString())}>
                    &#8226; {experience.projectName}
                  </Text>
                  <Text style={tw(projectTailwindStyle.period.toString())}>
                    {experience.period}
                  </Text>
                </View>

                {/* Role */}
                <Text style={tw(projectTailwindStyle.role.toString())}>
                  {experience.role}
                </Text>

                {/* Description */}
                {experience.description &&
                  experience.description.length > 0 && (
                    <View style={tw("pl-3")}>
                      {experience.description.map((description, idx) => (
                        <Text
                          key={idx}
                          style={tw(
                            projectTailwindStyle.description.toString()
                          )}
                        >
                          &#9675; {description}
                        </Text>
                      ))}
                    </View>
                  )}
              </View>
            ))}
          </View>
        </View>

        {/* Projects Section */}
        <View style={styles.section}>
          <Text style={tw(projectTailwindStyle.sectionTitle.toString())}>
            Projects
          </Text>
          <View style={tw(projectTailwindStyle.sectionBody.toString())}>
            {projects.map((experience, index) => (
              <View
                key={index}
                style={tw(projectTailwindStyle.item.toString())}
              >
                {/* Project Name and Period */}
                <View style={tw(projectTailwindStyle.itemHeader.toString())}>
                  <Text style={tw(projectTailwindStyle.projectName.toString())}>
                    &#8226; {experience.projectName}
                  </Text>
                  <Text style={tw(projectTailwindStyle.period.toString())}>
                    {experience.period}
                  </Text>
                </View>

                {/* Role */}
                <Text style={tw(projectTailwindStyle.role.toString())}>
                  {experience.role}
                </Text>

                {/* Description */}
                {experience.description &&
                  experience.description.length > 0 && (
                    <View style={tw("pl-3")}>
                      {experience.description.map((description, idx) => (
                        <Text
                          key={idx}
                          style={tw(
                            projectTailwindStyle.description.toString()
                          )}
                        >
                          &#9675; {description}
                        </Text>
                      ))}
                    </View>
                  )}
              </View>
            ))}
          </View>
        </View>

        {/* Education Section */}
        <View style={styles.section}>
          <Text style={tw(educationTailwindStyle.sectionTitle.toString())}>
            Education
          </Text>

          <View style={tw(educationTailwindStyle.itemHeader.toString())}>
            <View style={tw("flex flex-col items-start")}>
              <Text
                style={tw(educationTailwindStyle.universityName.toString())}
              >
                &#8226; FPT University
              </Text>
              <Text style={tw(educationTailwindStyle.major.toString())}>
                Bachelor of Software Engineering{" "}
              </Text>
            </View>
            <View style={tw("flex flex-col items-end")}>
              <Text style={tw(educationTailwindStyle.period.toString())}>
                Aug. 2021 – 2024 (expected)
              </Text>
              <Text style={tw(educationTailwindStyle.location.toString())}>
                Ho Chi Minh City, Vietnam
              </Text>
            </View>
          </View>

          <Text style={tw(educationTailwindStyle.course.toString())}>
            &#9675;{" "}
            <Text style={tw("font-semibold")}>Relevant coursework:</Text> Object
            Oriented Programming, Data Structures and Algorithms, Database
            Design, Software Development Project, Software Requirement, Software
            Testing, Software Architecture and Design, Project Management, Web
            Development, Mobile Development.
          </Text>
        </View>

        {/* Skills Section */}
        <View style={styles.section}>
          <Text style={tw(skillsTailwindStyle.sectionTitle.toString())}>
            Skills
          </Text>
          {/* Programming Languages */}
          <View style={styles.skillsWrapper}>
            <Text style={tw(skillsTailwindStyle.skillName.toString())}>
              &#8226; Programming Languages:
            </Text>
            {skills.programmingLanguages.map((language, index) => (
              <Text
                key={index}
                style={tw(skillsTailwindStyle.technology.toString())}
              >
                {language}
              </Text>
            ))}
          </View>

          {/* Libraries / Frameworks */}
          <View style={styles.skillsWrapper}>
            <Text style={tw(skillsTailwindStyle.skillName.toString())}>
              &#8226; Libraries / Frameworks:
            </Text>
            {skills.libraries.map((library, index) => (
              <Text
                key={index}
                style={tw(skillsTailwindStyle.technology.toString())}
              >
                {library}
              </Text>
            ))}
          </View>

          {/* Databases */}
          <View style={styles.skillsWrapper}>
            <Text style={tw(skillsTailwindStyle.skillName.toString())}>
              &#8226; Databases:
            </Text>
            {skills.databases.map((database, index) => (
              <Text
                key={index}
                style={tw(skillsTailwindStyle.technology.toString())}
              >
                {database}
              </Text>
            ))}
          </View>

          {/* Other skill */}
          <View style={styles.skillsWrapper}>
            <Text style={tw(skillsTailwindStyle.skillName.toString())}>
              &#8226; Other skills:
            </Text>
            {skills.othersk.map((tech, index) => (
              <Text
                key={index}
                style={tw(skillsTailwindStyle.technology.toString())}
              >
                {tech}
              </Text>
            ))}
          </View>
        </View>
      </Page>
    </Document>
  );
};

export default ContractPDFFormat;
