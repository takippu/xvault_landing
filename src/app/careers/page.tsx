import PageTemplate from '../../components/PageTemplate';

export default function Careers() {
  return (
    <PageTemplate title="Careers at xVault">
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Join Our Team</h2>
        <p className="mb-4">
          At xVault, we're building the future of secure text snippet management. We're looking for passionate, talented individuals who share our vision and want to make an impact.
        </p>
        <p className="mb-4">
          We offer a flexible work environment, competitive compensation, and the opportunity to work on products used by thousands of people worldwide.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Why Work With Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-secondaryBase p-6 rounded-xl border border-border">
            <h3 className="text-xl font-bold mb-3">Remote-First</h3>
            <p>
              Work from anywhere in the world. We believe in hiring the best talent regardless of location.
            </p>
          </div>
          <div className="bg-secondaryBase p-6 rounded-xl border border-border">
            <h3 className="text-xl font-bold mb-3">Growth Opportunities</h3>
            <p>
              We invest in our team's professional development and provide clear paths for advancement.
            </p>
          </div>
          <div className="bg-secondaryBase p-6 rounded-xl border border-border">
            <h3 className="text-xl font-bold mb-3">Meaningful Work</h3>
            <p>
              Build products that make a real difference in people's productivity and security.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Open Positions</h2>
        
        <div className="space-y-6">
          <div className="bg-secondaryBase p-6 rounded-xl border border-border hover:shadow-md transition-shadow">
            <h3 className="text-xl font-bold mb-2">Senior Frontend Developer</h3>
            <p className="text-secondaryText mb-4">Remote • Full-time</p>
            <p className="mb-4">
              We're looking for an experienced frontend developer with expertise in React and Chrome extension development to help us build new features and improve our user interface.
            </p>
            <button className="text-primaryBtn hover:text-hover font-medium">View Details →</button>
          </div>
          
          <div className="bg-secondaryBase p-6 rounded-xl border border-border hover:shadow-md transition-shadow">
            <h3 className="text-xl font-bold mb-2">Backend Engineer</h3>
            <p className="text-secondaryText mb-4">Remote • Full-time</p>
            <p className="mb-4">
              Join our backend team to build scalable, secure systems that power our synchronization and encryption features. Experience with Node.js and database design required.
            </p>
            <button className="text-primaryBtn hover:text-hover font-medium">View Details →</button>
          </div>
          
          <div className="bg-secondaryBase p-6 rounded-xl border border-border hover:shadow-md transition-shadow">
            <h3 className="text-xl font-bold mb-2">Product Designer</h3>
            <p className="text-secondaryText mb-4">Remote • Full-time</p>
            <p className="mb-4">
              Help shape the future of xVault by creating intuitive, beautiful user experiences. You'll work closely with our development and product teams to design features that delight our users.
            </p>
            <button className="text-primaryBtn hover:text-hover font-medium">View Details →</button>
          </div>
          
          <div className="bg-secondaryBase p-6 rounded-xl border border-border hover:shadow-md transition-shadow">
            <h3 className="text-xl font-bold mb-2">Customer Success Specialist</h3>
            <p className="text-secondaryText mb-4">Remote • Part-time</p>
            <p className="mb-4">
              Join our support team to help users get the most out of xVault. You'll provide technical support, create documentation, and gather feedback to improve our product.
            </p>
            <button className="text-primaryBtn hover:text-hover font-medium">View Details →</button>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-6">Our Hiring Process</h2>
        <ol className="list-decimal pl-6 space-y-4">
          <li>
            <strong>Application Review:</strong> We review your resume and cover letter to see if your skills and experience match our requirements.
          </li>
          <li>
            <strong>Initial Interview:</strong> A 30-minute video call with our hiring manager to discuss your background and the role.
          </li>
          <li>
            <strong>Technical Assessment:</strong> Depending on the role, you may be asked to complete a take-home assignment or technical interview.
          </li>
          <li>
            <strong>Team Interview:</strong> Meet with potential teammates to discuss your experience and approach to problem-solving.
          </li>
          <li>
            <strong>Final Interview:</strong> A conversation with our leadership team to ensure mutual fit.
          </li>
          <li>
            <strong>Offer:</strong> If all goes well, we'll extend an offer to join our team!
          </li>
        </ol>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-6">Don't See a Fit?</h2>
        <p className="mb-4">
          We're always interested in connecting with talented individuals. Send your resume to <a href="mailto:careers@xvault.app" className="text-primaryBtn hover:text-hover underline">careers@xvault.app</a> with a note about how you could contribute to our team.
        </p>
      </section>
    </PageTemplate>
  );
}