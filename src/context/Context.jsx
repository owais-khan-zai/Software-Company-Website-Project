import React, { createContext, useContext } from "react";

const BlogContext = createContext();

const BlogData = [
  {
    id: 1,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlKDBsPh2RqlSHBSAy8XgI8FgJpXHGQ7yEZA&s",
    name: "Web Development",
    content:
      "Web development is the process of building, designing, and maintaining websites and web applications that run on the internet or within a browser. It covers everything from basic markup (HTML) and styling (CSS) to complex interactive interfaces powered by JavaScript, React, Angular, or Vue. Modern web development also involves working with databases, APIs, and servers (using Node.js, Django, or Laravel) to create dynamic, data-driven platforms that can support millions of users. Today, web developers must also focus on making websites accessible, mobile-friendly, and highly optimized for performance and SEO. The best websites are built with a strong understanding of user experience, a keen eye for design, and an emphasis on security and scalability. It's an ever-changing field, making it vital for developers to stay updated with new technologies, tools, and best practices every year."
  },
  {
    id: 2,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvqL-oTkaPr555gZPIqwGlPyHFv0ZAWxWr4w&s",
    name: "App Development",
    content:
      "App development is the process of creating mobile and desktop applications that operate across platforms such as iOS, Android, and beyond. The process involves multiple steps, starting with idea generation, wireframing, and design, followed by coding the application using technologies such as Swift, Kotlin, Java, or cross-platform frameworks like Flutter and React Native. App developers focus on creating highly optimized, user-friendly interfaces that balance performance and design, making sure the experience feels seamless across all screen sizes and devices. Today, app development also embraces trends like offline-first design, AI-driven interactions, and seamless synchronization between platforms. Testing and deployment play an integral role, ensuring the app is stable, secure, and able to handle millions of active users. App developers work in a collaborative environment, partnering with designers, QA teams, and backend engineers to create robust and future-proof products that can evolve with user needs."
  },
  {
    id: 3,
    img: "https://miro.medium.com/v2/resize:fit:1031/1*PQcGkhP_5ynP7xoolaC-mQ.png",
    name: "Deployment",
    content:
      "Deployment is a critical phase in the software development lifecycle (SDLC) that marks the transition of an application from a development or testing environment to a live, production-ready environment. It's more than just putting files on a server — it's about ensuring an application is configured, optimized, secure, and able to perform reliably under load. Today, deployment is closely tied to the practice of Continuous Integration and Continuous Deployment (CI/CD), using platforms like GitHub Actions, GitLab CI, or CircleCI to streamline and automate the process. Modern deployments utilize containerization platforms like Docker and orchestration tools such as Kubernetes to manage services across distributed environments. In the era of microservices and cloud-native applications, deployment has evolved from a manual process to a highly automated one, making it a cornerstone for achieving agility, scalability, and resilience in software engineering."
  },
  {
    id: 4,
    img: "https://www.xibms.com/blog/wp-content/uploads/2022/10/what-is-management.jpg",
    name: "Management",
    content:
      "Management is the process of planning, organizing, and directing resources — people, equipment, time, and money — to achieve specific objectives effectively and efficiently. In a software or technology environment, management involves guiding cross-functional teams of developers, designers, testers, and stakeholders toward a common goal. It requires strong communication, prioritization, and problem-solving abilities. Management often uses methodologies like Agile, Scrum, and Kanban, focusing on iterative progress, collaboration, and stakeholder feedback. It's about aligning team efforts with business objectives while fostering a culture of trust, accountability, and continuous improvement. A successful manager is not just a planner, but also a mentor, listener, and facilitator, making sure that every team member can do their best work and contribute to the organization's long-term success. In the era of remote and distributed teams, management has evolved to focus on digital collaboration, making it both a challenging and rewarding discipline."
  },
  {
    id: 5,
    img: "https://static.nc-img.com/hosting/frontend/8f23e76e-d07a1a45bf7e/assets/images/social/hosting-landing/fb.6b493713b5c7a6d8ccc46b6493f66ec2.png",
    name: "Hosting",
    content:
      "Web hosting is the foundation that allows websites and applications to be accessible across the internet. It's like renting space in a digital universe — a service that provides servers, storage, bandwidth, and connectivity required for making websites available online. Today, web hosting goes far beyond basic site availability. Modern hosting platforms focus on performance, scalability, and security. They incorporate advanced features like automated backups, load balancers, content delivery networks (CDN), and SSL certificates. The rise of cloud services such as AWS, Azure, and GCP has reshaped how businesses host their applications, making it easy to scale servers based on traffic and usage. Understanding hosting is vital for developers and businesses alike, as it impacts site load times, user experience, and overall reliability. From shared hosting for small websites, to dedicated servers and serverless cloud deployments for global platforms, making the right hosting choice is one of the most critical decisions in a project's lifecycle."
  },
];


export const BlogProvider = ({ children }) => {
  return (
    <BlogContext.Provider value={BlogData}>
      {children}
    </BlogContext.Provider>
  );
};

export const useBlogData = () => {
  return useContext(BlogContext);
};