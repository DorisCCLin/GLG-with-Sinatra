require 'sinatra'

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

