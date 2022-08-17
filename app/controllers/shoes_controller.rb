class ShoesController < ApplicationController
    def index
        render json: Shoe.all
    end

    def show
        render json: Shoe.find_by(id: params[:id])
    end

    def update
        shoe = Shoe.find_by(id: params[:id])
        shoe.update(params)
    end

    def create
        shoe = Shoe.create(shoe_params)
        render json: shoe, status: :created
    end

    def delete
        shoe = Shoe.find_by(id: params[:id])
        shoe.delete
        head :no_content
    end

    private

    def shoe_params
        params.permit(:model_num, :name, :brand_id, :in_stock, :price )
    end
end
