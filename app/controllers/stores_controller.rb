class StoresController < ApplicationController
    wrap_parameters format: []
    
    def index
        render json: Store.all
    end

    def show
        render json: Store.find_by(id: params[:id])
    end

    def update
        store = Store.find_by(id: params[:id])
        store.update(params)
    end

    def create
        store = Store.create(store_params)
        render json: store, status: :created
    end

    def delete
        store = Store.find_by(id: params[:id])
        store.delete
        head :no_content
    end

    private

    def store_params
        params.permit(:name, :address)
    end
end
