require 'sinatra'
require 'sendgrid-ruby'
include SendGrid

get '/' do
    erb :index	
end

get '/about' do
    erb :about
end

get '/review' do
	@posts =['First','second','third']
	erb :review
end	

get '/contact' do
	erb :contact
end	

get '/imgGallery' do
	erb :imgGallery
end

get '/contacting'  do
    @email = params[:email]
    @subject = params[:subject]
    @content = params[:content]
    from = Email.new(email: @email)
    to = Email.new(email: 'test@gmail.com')
    subject = @subject
    content = Content.new(type: 'text/plain', value: @content)
    mail = Mail.new(from, subject, to, content)
    sg = SendGrid::API.new(api_key: ENV['SENDGRID_API_KEY'])
    response = sg.client.mail._('send').post(request_body: mail.to_json)
    puts response.status_code
    puts response.body
    puts response.headers
     
    erb :thank
    end

