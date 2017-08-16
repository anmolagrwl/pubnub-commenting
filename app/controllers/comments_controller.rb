class CommentsController < ApplicationController

  def index
  	@commentable = Article.find(params[:article_id])
    @comments = @commentable.comments
  end

  def new
  	@commentable = Article.find(params[:article_id])
	  @comment = @commentable.comments.new
	end
	  
	def create
		@commentable = Article.find(params[:article_id])
	  @comment = @commentable.comments.new(comment_params)
	  if @comment.save
			$pubnub.publish(
			    channel: "comments-" + "#{@commentable.id}",
			    message: { comment: comment_params["content"] }
			)

			respond_to do |format|
        format.js { render :nothing => true }
        format.html
      end

	  else
	    render :new
	  end
	end

	private
  	def comment_params
  		params.require(:comment).permit(:content)
  	end
end
