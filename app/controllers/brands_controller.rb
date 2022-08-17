class BrandsController < ApplicationController
    wrap_parameters format: []

    def index
        render json: Brand.all
    end

    def show
        render json: Brand.find_by(id: params[:id])
    end

    def update
        brand = Brand.find_by(id:params[:id])
        brand.update(params)
        render json: brand
    end

    def create
        brand = Brand.create(brand_params)
        render json: brand, status: :created
    end

    def delete
        brand = Brand.find_by(id: params[:id])
        brand.delete
        head :no_content
    end

    private

    def brand_params
        params.permit(:name, :image_url)
    end
end
