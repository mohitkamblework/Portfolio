import Head from 'next/head';
import Header from '../components/header';
import Footer from '../components/footer';
import Image from 'next/image';
import { useMediaQuery, Typography, Button, Box, Item } from '@mui/material';

export default function Home() {
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <Head>
        <title>Mohit Ravindra Kamble - Data Analyst Portfolio</title>
        <meta name="description" content="Portfolio of Mohit Ravindra Kamble, Data Analyst" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className={`mt-16 ${isMobile ? 'px-4' : 'px-6'}`}>
        {/* Hero Section */}
        <section className="bg-white py-12">
          <div className={`max-w-7xl mx-auto ${isMobile ? 'text-center' : 'px-6'}`}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-around',
              p: 1,
              m: 1,
              bgcolor: 'background.paper',
              borderRadius: 1,
            }}
          >
            <Image
              src="/IMG_2466.jpeg"
              alt="Mohit Ravindra Kamble"
              width={isMobile ? 500 : 500}
              height={isMobile ? 500 : 500}
              className=""
            />
            <div className='ml-12 pl-12 text-justify'>
              <p className={`mt-6 ${isMobile ? 'text-md' : 'text-lg'} text-gray-800`}>
              Hello, I’m Mohit Ravindra Kamble, an experienced data analyst with a proven track record at Cognizant,
              where I delivered data-driven solutions to enhance business performance and optimize marketing campaigns.
              Currently pursuing a Master’s in Analytics at Northeastern University, I am expanding my expertise in
              data analysis, big data, and marketing analytics.
              </p>
              <p className={`mt-6 ${isMobile ? 'text-md' : 'text-lg'} text-gray-800`}>
              Alongside my studies, I volunteer as the Head of Marketing and Communications for Boston New Technology (BNT),
              where I lead marketing campaigns and develop strategies to increase brand visibility, using data-driven insights
              to optimize performance. Proficient in Python, SQL, Tableau, and Power BI, I specialize in turning complex data
              into actionable insights that support decision-making and business growth. My blend of technical skills and
              leadership experience allows me to deliver impactful solutions and foster innovation.
              </p>
            </div>
            
          </Box>
            
            
          </div>
        </section>

        {/* Skills Section */}
        {/* <section className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 py-12">
          <div className="max-w-7xl mx-auto text-center">
            <Typography variant="h3" style={{ fontWeight: 'bold', color: '#fff' }}>
              Python, SQL, Tableau
            </Typography>
            <Typography variant="h5" style={{ color: '#fff', marginTop: '10px' }}>
              The pillars of my data analysis toolkit
            </Typography>
          </div>
        </section> */}

        {/* Work Experience Section */}
        <section className="bg-gray-50 py-12">
          <div className="max-w-7xl mx-auto">
            <h2 className={`text-3xl font-semibold text-gray-800 mb-8 ${isMobile ? 'text-center' : ''}`}>
              Work Experience
            </h2>
            <div className="bg-white p-6 shadow-md rounded-lg">
              <h3 className="text-xl font-bold">Software Engineer, Cognizant</h3>
              <p className="mt-2 text-gray-600">December 2021 - August 2023</p>
              <ul className={`list-disc pl-5 mt-4 text-gray-600 ${isMobile ? 'pl-3' : 'pl-5'}`}>
                <li>Developed a Tableau dashboard for comparative analysis of a new website and a legacy version, significantly enhancing user engagement. </li>
                <li>Analyzed product performance and forecasted sales, providing insights to executives that improved marketing campaign effectiveness.</li>
                <li>Utilized Oracle Database and Alteryx to design efficient ETL pipelines, streamlining data extraction and enhancing accuracy.</li>
                <li>Created a Python-based data pipeline to export data from Oracle to Google BigQuery, improving data accessibility for analysis.</li>
                <li>Automated Power BI dashboards for daily campaign updates, enhancing real-time visibility and streamlining reporting processes.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Leadership Section */}
        <section className="bg-white py-12">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-semibold text-gray-800 mb-8">Leadership & Volunteering</h2>
            <div className="bg-white p-6 shadow-md rounded-lg">
              <h3 className="text-xl font-bold">Head of Marketing & Communications, Boston New Technology</h3>
              <p className="mt-2 text-gray-600">December 2023 - Present</p>
              <ul className="list-disc pl-5 mt-4 text-gray-600">
                <li>Leading integrated marketing campaigns using Mailchimp, Zoho, and Sprout Social to enhance brand awareness.</li>
                <li>Implementing optimized email and SMS strategies, conducting market research to inform content distribution.</li>
                <li>Collaborating with cross-functional teams to align marketing initiatives with organizational goals.</li>
                <li>Monitoring campaign performance and adjusting strategies to maximize outreach and effectiveness.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="bg-gray-50 py-12">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-semibold text-gray-800 mb-8">Skills & Certifications</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-6 shadow-md rounded-lg">
                <h3 className="text-xl font-bold">Data Tools</h3>
                <p className="mt-2 text-gray-600">Tableau, Power BI, Oracle Database, Google BigQuery, Google Analytics, Apache Spark, Alteryx.</p>
              </div>
              <div className="bg-white p-6 shadow-md rounded-lg">
                <h3 className="text-xl font-bold">Database Management</h3>
                <p className="mt-2 text-gray-600">Oracle Database, Google BigQuery.</p>
              </div>
              <div className="bg-white p-6 shadow-md rounded-lg">
                <h3 className="text-xl font-bold">Programming & APIs</h3>
                <p className="mt-2 text-gray-600">Python, SQL, VBA, Listrak API, Google Analytics API.</p>
              </div>
              <div className="bg-white p-6 shadow-md rounded-lg">
                <h3 className="text-xl font-bold">Marketing Tools</h3>
                <p className="mt-2 text-gray-600">Mailchimp, Sprout Social, Listrak, Google Analytics, Campaign Optimization Strategies.</p>
              </div>
              <div className="bg-white p-6 shadow-md rounded-lg">
                <h3 className="text-xl font-bold">Certifications</h3>
                <p className="mt-2 text-gray-600">Tableau Desktop Specialist, Oracle Business Intelligence, Microsoft Azure Fundamentals</p>
              </div>
              <div className="bg-white p-6 shadow-md rounded-lg">
                <h3 className="text-xl font-bold">Soft Skills</h3>
                <p className="mt-2 text-gray-600">Leadership, Cultural Intelligence, Problem Solving, Attention to Detail, Networking, Creative Writing</p>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="bg-white py-12">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-semibold text-gray-800 mb-8">Projects</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gray-50 p-6 shadow-md rounded-lg">
                <h3 className="text-xl font-bold">Ad Videos Sentiment Analysis</h3>
                <p className="mt-2 text-gray-600 text-justify">
                This project is based on Logistic Regression and TF-IDF vectorization techniques for sentiment analysis of advertisement videos.
                </p>
              </div>
              <div className="bg-gray-50 p-6 shadow-md rounded-lg">
                <h3 className="text-xl font-bold">Tableau Dashboards</h3>
                <div className="mt-4">
                  <iframe
                    className="w-full h-64 border"
                    src="https://public.tableau.com/profile/mohit.kamble#!/"
                    title="Tableau Dashboard"
                  />
                </div>
              </div>
              {/* Dummy Projects for upcoming work */}
              <div className="bg-gray-50 p-6 shadow-md rounded-lg">
                <h3 className="text-xl font-bold">Upcoming Project 1</h3>
                <p className="mt-2 text-gray-600">This will showcase the work related to data processing pipelines.</p>
              </div>
              <div className="bg-gray-50 p-6 shadow-md rounded-lg">
                <h3 className="text-xl font-bold">Upcoming Project 2</h3>
                <p className="mt-2 text-gray-600">Placeholder for upcoming data visualization project.</p>
              </div>
              <div className="bg-gray-50 p-6 shadow-md rounded-lg">
                <h3 className="text-xl font-bold">Upcoming Project 3</h3>
                <p className="mt-2 text-gray-600">Placeholder for upcoming machine learning project.</p>
              </div>
              <div className="bg-gray-50 p-6 shadow-md rounded-lg">
                <h3 className="text-xl font-bold">Upcoming Project 4</h3>
                <p className="mt-2 text-gray-600">Placeholder for upcoming ETL process project.</p>
              </div>
              <div className="bg-gray-50 p-6 shadow-md rounded-lg">
                <h3 className="text-xl font-bold">Upcoming Project 5</h3>
                <p className="mt-2 text-gray-600">Placeholder for future work on data integration strategies.</p>
              </div>
              <div className="bg-gray-50 p-6 shadow-md rounded-lg">
                <h3 className="text-xl font-bold">Upcoming Project 6</h3>
                <p className="mt-2 text-gray-600">Placeholder for an advanced data analytics project.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="bg-gray-50 py-12">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">Get in Touch</h2>
            <p className="text-lg text-gray-600">I welcome the opportunity to connect and explore innovative data analysis solutions or potential collaborations!</p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
