class UsersController < ApplicationController

    wrap_parameters format: []

    def index
        render json: User.all 
    end
    
    def show 
        render json: User.find_by(id: params[:id])
    end

    def create
        user = User.create(user_params)
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
end
