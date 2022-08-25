class SessionsController < ApplicationController
    wrap_parameters format: []
    # skip_before_action :authorized, only: :create

    def create
        user = User.find_by(username: params[:username])
        if user&.authenticate(params[:password])
        session[:user_id] = user.id
        render json: user, status: :created
        puts "This is the #{session[:user_id]}"
        else
          puts :username
         render json: {error: "Invalid Username or Password"}, status: :unauthorized
        end
        puts params[:username]
      end
    

      def destroy
        session.delete :user_id
        head :no_content
        puts "why"
      end
end
