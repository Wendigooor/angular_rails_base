class ProductsController < ApplicationController

	def destroy
		product = Product.find(params[:id])
		product.destroy
		render json: :ok
	end

	def create
		product = Product.create(product_params)
		render json: product
	end

	def update
		product = Product.find(params[:id])
		product.assign_attributes(product_params)
		product.save
		render json: product
	end

	def index
		products = Product.all
		render json: products
	end

	def show
		product = Product.includes(:comments).find(params[:id])
		render json: product.to_json(:methods => :comments)
	end

	def add_comment
		product = Product.find(params[:id])
		comment = product.comments.create(body: params[:comment])
		render json: comment
	end

	private

	def product_params
		params.require(:product).permit(
			:name,
			:description,
			:price
		)
	end

end
