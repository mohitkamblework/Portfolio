import Head from 'next/head';
import Header from '../components/header';
import Footer from '../components/footer';
import Image from 'next/image';
import { useMediaQuery, Typography, Button } from '@mui/material';

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
            <Image
              src="/IMG_2466.jpeg"
              alt="Mohit Ravindra Kamble"
              width={isMobile ? 150 : 200}
              height={isMobile ? 150 : 200}
              className="mx-auto rounded-full"
            />
            <h2 className={`mt-6 ${isMobile ? 'text-3xl' : 'text-4xl'} font-semibold text-gray-800`}>
              Hello, I'm Mohit Ravindra Kamble
            </h2>
            <p className={`mt-4 ${isMobile ? 'text-md' : 'text-lg'} text-gray-600`}>
              I am a Data Analyst passionate about transforming data into actionable insights.
            </p>
            <div className="mt-6">
              <Button
                variant="text"
                color="primary"
                href="https://linkedin.com/in/mohitravindrakamble"
                target="_blank"
              >
                Contact Me
              </Button>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 py-12">
          <div className="max-w-7xl mx-auto text-center">
            <Typography variant="h3" style={{ fontWeight: 'bold', color: '#fff' }}>
              Python, SQL, Tableau
            </Typography>
            <Typography variant="h5" style={{ color: '#fff', marginTop: '10px' }}>
              The pillars of my data analysis toolkit
            </Typography>
          </div>
        </section>

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
                <li>Applied advanced statistical techniques to analyze clinical and operational datasets.</li>
                <li>Created interactive dashboards in Excel, Tableau, and Power BI, improving decision-making processes by 30%.</li>
                <li>Designed & deployed machine learning models to forecast drug demand, optimizing inventory management.</li>
                <li>Collaborated with R&D, sales & operations teams to address challenges in drug development timelines and regulatory compliance.</li>
                <li>Produced high-quality data pipelines supporting clinical trials and regulatory submissions.</li>
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
                <li>Implemented integrated marketing initiatives across traditional and digital platforms.</li>
                <li>Increased brand awareness and leads by 25% through strategic communication campaigns.</li>
                <li>Conducted market research to enhance marketing strategies.</li>
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
                <h3 className="text-xl font-bold">Data Analysis & Visualization</h3>
                <p className="mt-2 text-gray-600">Tableau, Power BI, Qlik, MySQL, PostgreSQL</p>
              </div>
              <div className="bg-white p-6 shadow-md rounded-lg">
                <h3 className="text-xl font-bold">Programming</h3>
                <p className="mt-2 text-gray-600">Python, SQL, R, VBA, Alteryx</p>
              </div>
              <div className="bg-white p-6 shadow-md rounded-lg">
                <h3 className="text-xl font-bold">Certifications</h3>
                <p className="mt-2 text-gray-600">Tableau Desktop Specialist, Data Management Professional</p>
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
                <h3 className="text-xl font-bold">Drug Demand Forecasting</h3>
                <p className="mt-2 text-gray-600">
                  Built machine learning models to forecast drug demand, improving inventory management.
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
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">Contact Me</h2>
            <p className="text-lg text-gray-600">Feel free to reach out to discuss data analysis or any potential collaborations!</p>
            <div className="mt-6">
              <Button
                variant="text"
                color="primary"
                href="mailto:kamble.mo@northeastern.edu"
                style={{ padding: '10px 20px' }}
              >
                Email Me
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
