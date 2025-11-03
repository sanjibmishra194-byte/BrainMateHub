import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";

export default function Privacy() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="py-16 md:py-20 lg:py-24">
          <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Privacy Policy</h1>
              <p className="text-muted-foreground">
                Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
              </p>
            </div>

            <div className="space-y-8">
              <Card className="p-8">
                <h2 className="text-2xl font-bold mb-4">Introduction</h2>
                <p className="text-muted-foreground">
                  Welcome to BrainMate. We respect your privacy and are committed to protecting your personal data. 
                  This privacy policy will inform you about how we handle your personal data when you visit our website 
                  and use our tools.
                </p>
              </Card>

              <Card className="p-8">
                <h2 className="text-2xl font-bold mb-4">Information We Collect</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    <strong className="text-foreground">Usage Data:</strong> We may collect information about how you 
                    access and use our tools, including your device type, browser type, pages visited, and time spent 
                    on our website.
                  </p>
                  <p>
                    <strong className="text-foreground">Calculator Data:</strong> The calculations you perform using 
                    our tools are processed locally in your browser and are not stored on our servers unless you 
                    explicitly save them.
                  </p>
                  <p>
                    <strong className="text-foreground">Contact Information:</strong> When you contact us through our 
                    contact form, we collect your name, email address, and message content.
                  </p>
                </div>
              </Card>

              <Card className="p-8">
                <h2 className="text-2xl font-bold mb-4">How We Use Your Information</h2>
                <div className="space-y-2 text-muted-foreground">
                  <p>We use the information we collect to:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Provide and maintain our services</li>
                    <li>Improve and optimize our tools</li>
                    <li>Respond to your questions and support requests</li>
                    <li>Send you updates and newsletters (with your consent)</li>
                    <li>Monitor and analyze usage patterns</li>
                  </ul>
                </div>
              </Card>

              <Card className="p-8">
                <h2 className="text-2xl font-bold mb-4">Cookies and Tracking</h2>
                <p className="text-muted-foreground">
                  We use cookies and similar tracking technologies to track activity on our website and store certain 
                  information. You can instruct your browser to refuse all cookies or to indicate when a cookie is 
                  being sent.
                </p>
              </Card>

              <Card className="p-8">
                <h2 className="text-2xl font-bold mb-4">Third-Party Services</h2>
                <p className="text-muted-foreground">
                  We may use third-party services such as Google Analytics and advertising networks. These services 
                  may collect information sent by your browser as part of a web page request.
                </p>
              </Card>

              <Card className="p-8">
                <h2 className="text-2xl font-bold mb-4">Data Security</h2>
                <p className="text-muted-foreground">
                  We implement appropriate security measures to protect your personal information. However, no method 
                  of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
                </p>
              </Card>

              <Card className="p-8">
                <h2 className="text-2xl font-bold mb-4">Your Rights</h2>
                <div className="space-y-2 text-muted-foreground">
                  <p>You have the right to:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Access your personal data</li>
                    <li>Correct inaccurate data</li>
                    <li>Request deletion of your data</li>
                    <li>Object to processing of your data</li>
                    <li>Withdraw consent at any time</li>
                  </ul>
                </div>
              </Card>

              <Card className="p-8">
                <h2 className="text-2xl font-bold mb-4">Children's Privacy</h2>
                <p className="text-muted-foreground">
                  Our services are not directed to children under 13. We do not knowingly collect personal information 
                  from children under 13. If you are a parent or guardian and believe your child has provided us with 
                  personal information, please contact us.
                </p>
              </Card>

              <Card className="p-8">
                <h2 className="text-2xl font-bold mb-4">Changes to This Privacy Policy</h2>
                <p className="text-muted-foreground">
                  We may update our Privacy Policy from time to time. We will notify you of any changes by posting the 
                  new Privacy Policy on this page and updating the "Last updated" date.
                </p>
              </Card>

              <Card className="p-8 bg-primary/5 border-primary/20">
                <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
                <p className="text-muted-foreground mb-4">
                  If you have any questions about this Privacy Policy, please contact us:
                </p>
                <div className="space-y-2 text-muted-foreground">
                  <p><strong className="text-foreground">Email:</strong> sanjibmishra194@gmail.com</p>
                  <p><strong className="text-foreground">Phone:</strong> 9866127239</p>
                </div>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
