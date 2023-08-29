"""empty message

Revision ID: b4ccfb068873
Revises: 
Create Date: 2023-08-29 09:35:21.881720

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'b4ccfb068873'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('item_table',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('title', sa.String(), nullable=True),
    sa.Column('brand', sa.String(), nullable=True),
    sa.Column('description', sa.String(), nullable=True),
    sa.Column('size', sa.String(), nullable=True),
    sa.Column('price', sa.Float(), nullable=True),
    sa.Column('image', sa.String(), nullable=True),
    sa.PrimaryKeyConstraint('id', name=op.f('pk_item_table'))
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('item_table')
    # ### end Alembic commands ###