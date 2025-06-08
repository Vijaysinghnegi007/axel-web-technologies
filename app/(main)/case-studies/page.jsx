export const metadata = {
  title: "Case Studies - Axel Web Technologies",
  description: "Explore our successful IT projects and client success stories. See how we've helped businesses transform with our technology solutions.",
}

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
              Case Studies
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Discover how we've helped businesses transform their operations with cutting-edge technology solutions.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">150+</div>
                <div className="text-muted-foreground">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">98%</div>
                <div className="text-muted-foreground">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">50+</div>
                <div className="text-muted-foreground">Industries Served</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Case Study 1 */}
            <div className="bg-card rounded-lg border border-border overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600"></div>
              <div className="p-6">
                <div className="text-sm text-primary font-medium mb-2">E-commerce Platform</div>
                <h3 className="text-xl font-semibold mb-3">Global Retail Transformation</h3>
                <p className="text-muted-foreground mb-4">
                  Modernized legacy systems for a multinational retailer, resulting in 300% increase in online sales.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded">React</span>
                  <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded">Node.js</span>
                  <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded">AWS</span>
                </div>
                <div className="text-sm text-muted-foreground">
                  <strong>Results:</strong> 300% sales increase, 50% faster load times
                </div>
              </div>
            </div>

            {/* Case Study 2 */}
            <div className="bg-card rounded-lg border border-border overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-br from-green-500 to-blue-600"></div>
              <div className="p-6">
                <div className="text-sm text-primary font-medium mb-2">Healthcare Platform</div>
                <h3 className="text-xl font-semibold mb-3">Digital Health Revolution</h3>
                <p className="text-muted-foreground mb-4">
                  Built a comprehensive telemedicine platform serving 100,000+ patients across multiple states.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded">Vue.js</span>
                  <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded">Python</span>
                  <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded">Docker</span>
                </div>
                <div className="text-sm text-muted-foreground">
                  <strong>Results:</strong> 100K+ patients served, 99.9% uptime
                </div>
              </div>
            </div>

            {/* Case Study 3 */}
            <div className="bg-card rounded-lg border border-border overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-br from-purple-500 to-pink-600"></div>
              <div className="p-6">
                <div className="text-sm text-primary font-medium mb-2">FinTech Solution</div>
                <h3 className="text-xl font-semibold mb-3">Banking Innovation</h3>
                <p className="text-muted-foreground mb-4">
                  Developed a secure mobile banking app with AI-powered fraud detection for a regional bank.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded">React Native</span>
                  <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded">AI/ML</span>
                  <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded">Blockchain</span>
                </div>
                <div className="text-sm text-muted-foreground">
                  <strong>Results:</strong> 95% fraud reduction, 2M+ transactions
                </div>
              </div>
            </div>

            {/* Case Study 4 */}
            <div className="bg-card rounded-lg border border-border overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-br from-orange-500 to-red-600"></div>
              <div className="p-6">
                <div className="text-sm text-primary font-medium mb-2">Manufacturing IoT</div>
                <h3 className="text-xl font-semibold mb-3">Smart Factory Implementation</h3>
                <p className="text-muted-foreground mb-4">
                  Implemented IoT sensors and analytics platform reducing downtime by 60% for a major manufacturer.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded">IoT</span>
                  <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded">Analytics</span>
                  <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded">Azure</span>
                </div>
                <div className="text-sm text-muted-foreground">
                  <strong>Results:</strong> 60% less downtime, $2M saved annually
                </div>
              </div>
            </div>

            {/* Case Study 5 */}
            <div className="bg-card rounded-lg border border-border overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-br from-teal-500 to-green-600"></div>
              <div className="p-6">
                <div className="text-sm text-primary font-medium mb-2">Education Platform</div>
                <h3 className="text-xl font-semibold mb-3">Learning Management System</h3>
                <p className="text-muted-foreground mb-4">
                  Created a comprehensive LMS platform serving 50,000+ students across 200+ institutions.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded">Next.js</span>
                  <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded">GraphQL</span>
                  <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded">MongoDB</span>
                </div>
                <div className="text-sm text-muted-foreground">
                  <strong>Results:</strong> 50K+ students, 200+ institutions
                </div>
              </div>
            </div>

            {/* Case Study 6 */}
            <div className="bg-card rounded-lg border border-border overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-br from-indigo-500 to-purple-600"></div>
              <div className="p-6">
                <div className="text-sm text-primary font-medium mb-2">Logistics Platform</div>
                <h3 className="text-xl font-semibold mb-3">Supply Chain Optimization</h3>
                <p className="text-muted-foreground mb-4">
                  Built an AI-powered logistics platform that optimized delivery routes and reduced costs by 40%.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded">AI/ML</span>
                  <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded">Maps API</span>
                  <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded">Real-time</span>
                </div>
                <div className="text-sm text-muted-foreground">
                  <strong>Results:</strong> 40% cost reduction, 25% faster delivery
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Start Your Success Story?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help transform your business with innovative technology solutions.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
          >
            Start Your Project
          </a>
        </div>
      </section>
    </div>
  )
}
