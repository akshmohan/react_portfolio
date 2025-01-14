
const DownloadResume = () => {
    const resumeUrl = 'public/resume/Resume.pdf';
  
    return (
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <a
          href={resumeUrl}
          download="AkshMohan_Resume.pdf"
          style={{
            textDecoration: 'none',
            color: '#fff',
            backgroundColor: '#007BFF',
            padding: '12px 20px',
            borderRadius: '5px',
            fontWeight: 'bold',
            display: 'inline-block',
            fontSize: '16px',
            marginTop: '20px',
            transition: 'background-color 0.3s ease',
          }}
          onMouseEnter={(e) => (e.target.style.backgroundColor = '#0056b3')}
          onMouseLeave={(e) => (e.target.style.backgroundColor = '#007BFF')}
        >
          Download My Resume
        </a>
      </div>
    );
  };
  
  export default DownloadResume;