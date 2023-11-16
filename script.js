
document.addEventListener("DOMContentLoaded", function () {
    const homeLink = document.getElementById("home");
    const articlesLink = document.getElementById("articles");
    const aboutLink = document.getElementById("about");
    const content = document.getElementById("content");

    homeLink.addEventListener("click", function (e) {
        e.preventDefault();
        content.innerHTML = `
            <article>
                <h2>Home Page</h2>
                <p>Welcome to My Wiki! Select a section from the navigation above.</p>
            </article>
        `;
    });

    articlesLink.addEventListener("click", function (e) {
        e.preventDefault();
       
        content.innerHTML = `
            <article>
                <h2>OP Bhalla</h2>
                <p>Dr. O P Bhalla is a visionary and active educationist who molded the Educational Movement called Manav Rachna’ Vidyantariksha’, a name to reckon with on the country’s education landscape today with the desire to create better people.He is a Karmayogi who inspired this country’s youth to become the social leaders of their generation. His vision and mission have inspired many to follow the path of Community Service and Society’s Welfare. He left a legacy of quality education and development for the society, which attracts Youth Leaders, like-minded individuals and institutions in our mission to create a better and self-sustained nation. </p>
                <h2>Xebia</h2>
                <p>Xebia is a global IT consultancy and service provider known for its expertise in software development, digital transformation, and agile methodologies. The company was founded in the Netherlands and has expanded its presence internationally. Xebia offers a range of services, including software development, DevOps, cloud computing, data engineering, and training in emerging technologies. The company is recognized for its commitment to delivering high-quality solutions and helping businesses leverage technology to achieve their goals. Keep in mind that details about companies can change over time, so I recommend checking the latest information from reliable sources for the most up-to-date overview of Xebia.</p>
                <h2>Sunder Pichai</h2>
                <p>Sundar Pichai joined Google in 2004 and played a key role in the development of various products, including the Google Chrome browser and the Chrome OS. He later oversaw the Android operating system, and in 2015, he was appointed as the CEO of Google when the company underwent a corporate restructuring, creating Alphabet Inc. as Google's parent company.
                 Pichai became the CEO of Alphabet Inc. in December 2019, succeeding Larry Page. Sundar Pichai is widely recognized for his leadership in the technology industry and his contributions to the growth of Google and its various products and services. Please note that developments may have occurred since my last update, so it's a good idea to check more recent sources for the latest information on Sundar Pichai.</p>
                <h2>Google</h2>
                <p>Google is a multinational technology company that specializes in internet-related services and products. Founded in 1998 by Larry Page and Sergey Brin while they were Ph.D. students at Stanford University, Google has grown to become one of the world's leading technology giants. The company's primary focus is on search engines, online advertising technologies, cloud computing, software, and hardware. Google's flagship product, its search engine, is widely used globally, and the company has expanded its offerings to include services like Gmail, Google Maps, Google Drive, YouTube, and the Android operating system for mobile devices. Google's commitment to innovation is evident in its ventures into artificial intelligence, machine learning, and other cutting-edge technologies. The company's corporate motto is "Don't be evil," reflecting its emphasis on ethical business practices. In 2015, Google underwent corporate restructuring, creating the parent company Alphabet Inc., with Google remaining its leading subsidiary.</p>
                <h2>Manav Rachna University</h2>
                <p>Manav Rachna University (MRU) is a private university located in Faridabad, Haryana, India. Established in 2014, it is part of the Manav Rachna Educational Institutions (MREI), which have a rich history in the field of education. MRU offers a diverse range of undergraduate, postgraduate, and doctoral programs across various disciplines, including engineering, management, applied sciences, humanities, and social sciences. The university is known for its commitment to providing quality education, fostering innovation, and promoting holistic development among its students. It emphasizes a blend of academic theory and practical exposure, encouraging students to engage in research and industry collaborations. MRU is equipped with modern infrastructure, state-of-the-art facilities, and a vibrant campus life, contributing to a conducive learning environment for its students.</p>
             </article>
        `;
    });

    aboutLink.addEventListener("click", function (e) {
        e.preventDefault();
        
        content.innerHTML = `
            <article>
                <h2>About</h2>
                <p>Website created by Akshar Kumar Talla. Roll Number- 2K23CSUN01196, AIML A.</p>
            </article>
        `;
    });
});

