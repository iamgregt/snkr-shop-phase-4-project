class UsersController < ApplicationController
# skip_before_action :authorized, :only => [:create, :show]
rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

    wrap_parameters false

    def index
        render json: User.all 
    end
    
    def show
    user = User.find_by(id: session[:id])
    if user
      render json: user, status: :created
    else
      render json: { error: "Not authorized" }, status: :unauthorized
    end
  end

    def create
        byebug
        user = User.create!(user_params)
        render json: user, status: :created
    end

    def update
        user = User.find_by(id: params[:id])
        user.update(params)
        render json: user
    end
    
    def delete
        user = User.find_by(id: params[:id])
        user.delete
        head :no_content
    end

    private

    def render_unprocessable_entity_response(invalid)
        render json: { errors: invalid.record.errors }, status: :unprocessable_entity
      end
    

    def user_params
        params.permit(:username, :password, :first_name, :last_name, :shoe_size)
    end
end
